async function getLocations() {
  const api: string = process.env.REACT_APP_API_URL!;
  const locations = await fetch(api + "/event/ActiveLocations")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return locations;
}

export default getLocations;
