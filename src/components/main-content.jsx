import { useContext, useEffect, useState } from "react";
import testGooglePlacesApi from "../services/api.js";
import FavouritesContext from "../contexts/FavouritesContext.jsx";

const dummyRestaurants = [
  {
    id: 1,
    name: "The Hungry Fork",
    address: "221 Baker Street, London",
    photoUrl: "https://picsum.photos/seed/restaurant1/500/350",
    rating: 4.8
  },
  {
    id: 2,
    name: "Sunset Grill",
    address: "15 Ocean Avenue, Miami",
    photoUrl: "https://picsum.photos/seed/restaurant2/500/350",
    rating: 4.5
  },
  {
    id: 3,
    name: "Spice Junction",
    address: "42 MG Road, Bengaluru",
    photoUrl: "https://picsum.photos/seed/restaurant3/500/350",
    rating: 4.3
  },
  {
    id: 4,
    name: "Pizza Planet",
    address: "78 Downtown Street, New York",
    photoUrl: "https://picsum.photos/seed/restaurant4/500/350",
    rating: 4.7
  },
  {
    id: 5,
    name: "Tokyo Sushi House",
    address: "9 Sakura Lane, Tokyo",
    photoUrl: "https://picsum.photos/seed/restaurant5/500/350",
    rating: 4.9
  },
  {
    id: 6,
    name: "Green Garden Cafe",
    address: "11 Park View, Toronto",
    photoUrl: "https://picsum.photos/seed/restaurant6/500/350",
    rating: 4.1
  },
  {
    id: 7,
    name: "Burger Kingdom",
    address: "87 King Street, Sydney",
    photoUrl: "https://picsum.photos/seed/restaurant7/500/350",
    rating: 4.4
  },
  {
    id: 8,
    name: "Royal Biryani",
    address: "5 Charminar Road, Hyderabad",
    photoUrl: "https://picsum.photos/seed/restaurant8/500/350",
    rating: 4.6
  },
  {
    id: 9,
    name: "Pasta Paradise",
    address: "19 Maple Avenue, Rome",
    photoUrl: "https://picsum.photos/seed/restaurant9/500/350",
    rating: 4.2
  },
  {
    id: 10,
    name: "Mountain View Diner",
    address: "44 Hill Road, Denver",
    photoUrl: "https://picsum.photos/seed/restaurant10/500/350",
    rating: 4.0
  },
  {
    id: 11,
    name: "Ocean Breeze Seafood",
    address: "101 Harbor Drive, Seattle",
    photoUrl: "https://picsum.photos/seed/restaurant11/500/350",
    rating: 4.7
  },
  {
    id: 12,
    name: "Midnight Tacos",
    address: "56 Sunset Boulevard, Los Angeles",
    photoUrl: "https://picsum.photos/seed/restaurant12/500/350",
    rating: 4.5
  }
];

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
    <div className="main-content">
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
    </div>
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
