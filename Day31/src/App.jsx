import Touristplace from "./TouristPlace"

const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife,resort town and Portuguese heritage.",
    img: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWxpfGVufDB8fDB8fHww",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFpcHVyfGVufDB8fDB8fHww",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];

function App(){
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {touristPlaces.map(place=>{
        return (
          <Touristplace 
          name={place.placeName}
          desc={place.desc}
          img={place.img}
          season={place.whenToVisit}
          ratings={place.ratings}
          price={place.price}
        />
        )
      })}
      </div>
    </>
  )
}

export default App