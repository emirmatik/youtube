import React from 'react'

export default function Restaurant({restaurant}) {
   return (
      <div className="restaurantDiv">
         <div className="restaurant">
            <div className="logo">
               <img src={restaurant.logo} />
            </div>

            <div className="restaurantInfo">
               <div className="restaurantNameType">
                  <h1 className="restaurantName">{restaurant.name}</h1>
                  <h2 className="restaurantType">Type: {restaurant.type}</h2>
               </div>

               <div className="restaurantDesc">{restaurant.description}</div>
               <div className="restaurantAddress">Address: {restaurant.address}</div>

               <div className="restaurantDaysDiv">
                  <div>Days</div>
                  <div className="restaurantDays">
                     {Object.keys(restaurant.hours).map(day => <p key={day} style={{color: restaurant.hours[day].is_closed ? "tomato" : 'green'}} className="day">{day}</p>)}
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}
