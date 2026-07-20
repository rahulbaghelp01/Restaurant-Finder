import { createContext, useEffect } from "react";
import { useState } from "react";

const FavouritesContext = createContext();



export function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState(() => {
        const saved = localStorage.getItem("favourites");

        return saved ? JSON.parse(saved) : [];
    });


    useEffect(() => {
        const savedFavourites = JSON.parse(
            localStorage.getItem("favourites")
        );

        if (savedFavourites !== null) {
            setFavourites(savedFavourites);
        }
    }, []);

    useEffect(() => {
        console.log("Saving:", favourites);
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const toggleFavourite = (place) => {
        console.log("Toggle called", place);

        setFavourites((prev) => {
            const next = prev.some(item => item.id === place.id)
                ? prev.filter(item => item.id !== place.id)
                : [place, ...prev];

            console.log("Next favourites:", next);

            return next;
        });
    };
    return (
        <FavouritesContext.Provider value={{
            favourites,
            toggleFavourite,

        }}>
            {children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContext;