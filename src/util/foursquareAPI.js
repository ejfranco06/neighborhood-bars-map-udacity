const url = `https://api.foursquare.com/v2/venues`;
const endPoint = `/search?`;
const client_id=`client_id=ITEIOPINLTI14IC45A2KDKWVV3NQWJPINDBMRRT0UCNLPCQD`;
const client_secret=`client_secret=FWICMHMU5EFPJUENKPVEQ1QWV524LIGOVGMUEEI3ADFHMRTM`;
const version = `v=20181022`;
const radius = 'radius=250';


function getCategoryID(category) {
  if(category === 'venuesBar')
    return '4bf58dd8d48988d116941735';
  if(category === 'venuesFood')
    return '4d4b7105d754a06374d81259';
  if(category === 'venuesRecreation')
    return '4d4b7105d754a06377d81259';
}


export async function simpleFetch(location, category, update) {
  const ll = `ll=${location.lat},${location.lng}`;
  const categoryID = 'categoryId='+ getCategoryID(category);


  let venues = null;
  try{
    let response = await fetch(`${url}${endPoint}&${client_id}&${client_secret}&${version}&${ll}&${radius}&${categoryID}&limit=10`);
    if(response.status === 200) {
      venues = await response.json();
    } else {
      console.log("you need from service worker");
    }

  } catch(e) {
      console.log(e);
  }
  const data = {[category]: venues.response.venues};
  update(data);

  return  venues.response.venues;

}
