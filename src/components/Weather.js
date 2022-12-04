import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "e0b69f8b2229e4d516d67f9b3d817079";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
// import React from "react";
// import { useState } from "react";
// import "./weather.css";
// import DisplayWeather from "./DisplayWeather";


// function Weather() {
//     const APIKEY = "e0b69f8b2229e4d516d67f9b3d817079";
//   const [form, setForm] = useState({
//     city: "",
//     country: "",
//   });

//   async function weatherData(e){
//     e.preventDefault();
//     if(form.city==""){
//         alert("Add values");
//     }else{
//         const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
        
//         .then((res) => (res.json()))
//         .then((data) => (data));

//         setWeather( 
//           {
//             data : data
//           }
//         );
//     }
//   }
//   const handleChange = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     if (name == "city") setForm({ ...form, city: value });
//     if (name == "country") setForm({ ...form, country: value });
//     // console.log(form.city, form.country);
//   };
//   return (
//     <div className="weather">
//       <span className="title">Weather App</span>
//       <br />
//       <form>
//         <input
//           type="text"
//           name="City"
//           placeholder="City"
//           onChange={(e) => handleChange(e)}
//         />
//         <input
//           type="text"
//           name="Country"
//           placeholder="Country"
//           onChange={(e) => handleChange(e)}
//         />
//         &nbsp; &nbsp;
//         <button className="getweather" onClick={(e) => weatherData(e)}>Submit</button>
//       </form>
//       {
//        {weather.data != undefined ? (
//         <div>
//           <DisplayWeather data={weather.data} />
//         </div>
//       ) : null}
//       }
//     </div>
//   );
// }

// export default Weather;
