const url = `https://api.foursquare.com/v2/venues`;
const endPoint = `/search?`;
const client_id=`client_id=ITEIOPINLTI14IC45A2KDKWVV3NQWJPINDBMRRT0UCNLPCQD`;
const client_secret=`client_secret=FWICMHMU5EFPJUENKPVEQ1QWV524LIGOVGMUEEI3ADFHMRTM`;
const version = `v=20181022`;
const radius = 'radius=350';
const categoryID = 'categoryId=4bf58dd8d48988d116941735';


export async function simpleFetch(location, update) {
  const ll = `ll=${location.lat},${location.lng}`;

  let venues = null;
  try{
    let response = await fetch(`${url}${endPoint}&${client_id}&${client_secret}&${version}&${ll}&${radius}&${categoryID}&limit=30`);
    if(response.status === 200) {
      venues = await response.json();
    } else {
      console.log("Error");
      alert("No venues found please try again");
    }

  } catch(e) {
      console.log(e);
  }
  const data = {allVenues: venues.response.venues};
  update(data);

}
