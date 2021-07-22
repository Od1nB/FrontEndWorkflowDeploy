import axios from "axios";

async function getLocations() {
  const api: string = process.env.REACT_APP_API_URL!;
  const locations = await axios
    .get(api + "/event/ActiveLocations")
    .then((response) => response.data)
    .then((data) => {
      return data;
    });

  return locations;
}

export default getLocations;
