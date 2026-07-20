async function testGooglePlacesApi(searchQuery = "places") {
   
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; 
  const url = "https://places.googleapis.com/v1/places:searchText";

  console.log(`🔍 Searching Google Places for: "${searchQuery}"...`);

  const headers = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": apiKey,
    "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.photos,places.rating"
  };

  const body = JSON.stringify({
    textQuery: searchQuery,
    maxResultCount: 12  
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    });

    const data = await response.json();

    if (!data.places) {
      console.warn("⚠️ No places found or demo key quota exceeded.");
      console.log("Raw Response:", data);
      return null;
    }

    // Format the response into your exact desired object structure
    const formattedResults = data.places.map(place => {
      let photoUrl = "https://via.placeholder.com/400x300?text=No+Image";
      if (place.photos && place.photos.length > 0) {
        const photoName = place.photos[0].name;
        photoUrl = `https://places.googleapis.com/v1/${photoName}/media?key=${apiKey}&maxWidthPx=400`;
      }

      return {
        id: place.id || null,
        name: place.displayName?.text || "Unknown",
        address: place.formattedAddress || "No Address",
        photourl: photoUrl,
        rating: place.rating || 0.0
      };
    });

    
    console.log("🎉 SUCCESS! Here is your formatted data:");
    console.table(formattedResults);  
    return formattedResults;
  } catch (error) {
    console.error("❌ API Fetch Error:", error);
    return null;
  }
}

 





if (typeof window !== "undefined") {
  window.testGooglePlacesApi = testGooglePlacesApi;
}

export default testGooglePlacesApi





