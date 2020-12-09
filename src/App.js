import React, { useState } from "react";
import "./styles.css";

var cuisineDB = {
  Maharashtrian: [
    {
      name: "Surve's Pure Non-Veg",
      address: "FC Road",
      rating: "4.7/5",
      info:
        "This place; as the name suggests; is famous for its Maharashtrian non-vegetarian food. Surve’s Special Thali and the Chicken Thecha are a must try, as are their Chicken Handi and Rassa.",
      cost: "500 for two"
    },
    {
      name: "Durvankur Dining Hall",
      address: "Tilak Road, Sadashiv Peth",
      rating: "4.5/5",
      info:
        "This place lies in the heart of the city, is famous for its Pumeri vegetarian cuisine. Hordes of people are attracted here, just to try their Special Thali, Aamras and Rabdi.",
      cost: "550 for two"
    },
    {
      name: "Sukanta",
      address: "Deccan Gymkhana",
      rating: "4.4/5",
      info:
        "Famous for its Veg Thali and Aamras, Sukanta has a reputation of never disappointing a customer. This placed is booked most of the times, so better hurry up and get your reservation.",
      cost: "700 for two"
    },
    {
      name: "Maratha Samrat",
      address: "Camp, Multiple Branches",
      rating: "4.4/5",
      info:
        "The ambiance of this place reminds you of our culture, and the food satisfies your soul. This place offers a limited Kolhapuri style menu, but the dishes are excellent.",
      cost: "1000 for two"
    },
    {
      name: "Poona Guest House",
      address: "Budhwar Peth, Laxmi Road",
      rating: "4.3/5",
      info:
        "This lowkey place is totally underrated compared to the food they offer. Traditional Maharashtrian Thali, Misal Pav and Thalipeeth here is a must try.",
      cost: "400 for two"
    },
    {
      name: "Saoji Khamang",
      address: "Koregaon Park",
      rating: "4.3/5",
      info:
        "A relatively cheap place, but the food is exeptional. Must try dishes here are PuranPoli, Chicken Varhadi and the Special Saoji chicken thali.",
      cost: "400 for two"
    }
  ],
  Arabian: [
    {
      name: "Arabian Cafe",
      address: "Camp area",
      rating: "4.7/5",
      info:
        "An awesome place for Shawarma and other arabian delicacies. The shawarma size is huge and is worth the money. Also the taste is awesome.",
      cost: "300 for 2"
    },
    {
      name: "Arabian Bites",
      address: "Kondhwa",
      rating: "4.7/5",
      info:
        "This place offers hearty shawarmas and various arabian cuisines. The traditional Chicken Shawarma and the spicy chicken Shawarma is a must try.",
      cost: "300 for two"
    },
    {
      name: "Arabian Grills",
      address: "Katraj",
      rating: "4.7/5",
      info:
        "Offers a variety of dishes including Arabian/Indo-Chinese and North Indian. Special chicken Shawarma is a famous option here which is savoured by many customers.",
      cost: "250 for two"
    },
    {
      name: "Al-hifazat",
      address: "Shastrinagar",
      rating: "4.3/5",
      info:
        "This place is known for its kebabs and biryanis, bu the hidden gem of their menu is the shawarma. Even though it's small, the taste is great.",
      cost: "1000 for two"
    }
  ],
  Italian: [
    {
      name: "1441 Pizzeria",
      address: "Koregaon Park",
      rating: "4.1/5",
      info:
        "Offers a variety of authentic Italian pizzas that are baked in a clay oven in front of you. Good place for a relaxed evening.",
      cost: "900 for two"
    },
    {
      name: "Le Plaisir",
      address: "Deccan Gymkhana",
      rating: "4.3/5",
      info:
        "Variety of good pastas, pizzas and sandwiches to choose from. Ambiance is also good and nice for a date night.",
      cost: "800 for two"
    },
    {
      name: "Little Italy",
      address: "Multiple Locations",
      rating: "4.1/5",
      info:
        "Pretty expensive place, but offers a good authentic Italian menu choices.",
      cost: "1500 for two"
    }
  ],
  IndoChinese: [
    {
      name: "Kok-Pa",
      address: "FC Road and Baner",
      rating: "4.5/5",
      info:
        "Good place to have a quick chowmein bite. Portion sizes are huge and the taste is top-notch. Chicken Triple Noodles are a must try.",
      cost: "400 for two"
    },
    {
      name: "Gokul's Pure Veg Chinese",
      address: "Tilak Road SP college",
      rating: "4.2/5",
      info:
        "Vegetarian versions of Indo-Chinese cuisine. Small place and is always booked. Famous among vegetarian people.",
      cost: "500 for two"
    },
    {
      name: "Chang's chinese",
      address: "Viman Nagar",
      rating: "4.4/5",
      info:
        "Very good Chinese rice and noodles options, along with some good soups and starters. Ambiance is good and service is friendly.",
      cost: "800 for two"
    }
  ]
};
export default function App() {
  const [cuisineType, setCuisineType] = useState("Arabian");
  function cuisineClickHandler(cuisine) {
    setCuisineType(cuisine);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "2.5rem" }}>PuneEats</h1>

      <p style={{ fontSize: "smaller" }}>
        Click on the type of cuisine you're feeling like eating today and we
        will suggest the best restaurants in Pune city.
      </p>
      <div>
        {Object.keys(cuisineDB).map((cuisine) => (
          <button
            onClick={() => cuisineClickHandler(cuisine)}
            style={{
              cursor: "pointer",
              padding: "0.5rem",
              margin: "0rem 1rem",
              border: "1px solid black",
              borderRadius: "1rem",
              backgroundColor: "lemonchiffon"
            }}
          >
            {cuisine}
          </button>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul>
          {cuisineDB[cuisineType].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                maxWidth: "700px",
                borderRadius: "0.5rem",
                margin: "auto",
                marginBottom: "1rem"
              }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold"
                }}
              >
                {place.name}
              </div>
              <div style={{}}>{place.info}</div>
              <div>Address: {place.address}</div>
              <div>Rating: {place.rating}</div>
              <div>Approx Cost: {place.cost}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
