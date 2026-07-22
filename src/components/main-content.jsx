import { useContext, useEffect, useState } from "react";
import testGooglePlacesApi from "../services/api.js";
import FavouritesContext from "../contexts/FavouritesContext.jsx";

 

export default function MainContent() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const { favourites } = useContext(FavouritesContext);

  async function fetchData(query = "places") {
    setLoading(true);

    try {
      const data = await testGooglePlacesApi(query);
      setData(data);
    } catch (error) {
      console.log("Sorry, you're out of requests.");
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) {
      fetchData();
    } else {
      fetchData(query);
    }
  };

   useEffect(() => {
    fetchData();
   }, []);

  

  return (
    <main className="main-content ">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          id="search-field"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {loading ? (
        <p>Loading Please Wait...</p>
      ) : (
        <div>
          {data.map((place) => (
            <Cards
              key={place.id}
              place={place}
              
            />
          ))}
        </div>
      )}
    </main>
  );
}

export function Cards({ place }) {

   const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.some(
    (item) => item.id === place.id
  );

  return (
    <div className="main-card">
      <div className="image-div">
        <img
          src={place.photoUrl}
          alt={`${place.name} image`}
        />

        <button
          className="fav-toggle-button"
          onClick={()=>toggleFavourite(place)}
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="place-info">
        <p>{place.name}</p>
        <p>⭐ {place.rating}</p>
        <p>{place.address}</p>
      </div>
    </div>
  );
}
