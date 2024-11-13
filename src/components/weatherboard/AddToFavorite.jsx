import { useContext, useEffect, useState } from "react";
import RedHeartImg from "../../assets/heart-red.svg";
import HeartImg from "../../assets/heart.svg";
import FavoriteContext from "../../context/FavoriteContext";
import WeatherContext from "../../context/WeatherContext";

export default function AddToFavorite() {
  const [isFavorite, toggleFavorites] = useState(false);

  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorites(found);
  }, [favorites, location]);

  const handleFavorites = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(longitude, latitude, location);
    } else removeFromFavorites(location);

    toggleFavorites(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorites}
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? RedHeartImg : HeartImg} alt="heart-img" />
        </button>
      </div>
    </div>
  );
}
