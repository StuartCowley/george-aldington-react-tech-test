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
        const parsedImages = imageResults.filter((element) => element.data[0].media_type === "image");
        const images = parsedImages.map((element) => element.links[0].href);
        console.log(query, "--query")
        console.log(imageResults, "results");
        console.log(parsedImages, "--parsed")
        console.log(images,"--images")
        return images;
      })

      .catch((err) => {
        console.log(err);
      });
  }
}

export default getImages;