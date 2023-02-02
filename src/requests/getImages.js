import axios from "axios";

const getImages = (query) =>{
  if (!query) {
    return Promise.resolve([]);
  }
  else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter((element) => element.data[0].mediatype === "image");
        const images = parsedImages.map((element) => element.links[0].href);
        console.log(images)
      })

      .catch((err) => {
        console.log(err);
      });
  }
}

export default getImages;