import './state.css';
import convertible from "./images/a-side-view-of-a-3d-shiny-red-ca.jpg";
import coupe from "./images/photo-1588127333419-b9d7de223dcf.png";
import SUV from "./images/maksym-tymchyk-bb6NaemzpGY-unsplash.jpg";
import minivan from "./images/photo-1625862796301-e6658293d54f.png";
import { useState } from "react";

function Car() {
  const carData=[convertible, coupe, SUV, minivan];
  const [car, setCar] = useState(0);

  const changeCar = () => {
    let i=car;
    i++
    if (i === carData.length) {
      i = 0 
    }
    setCar(i);
  }
return (
    <>
      <div className='container-fluid'>
        <img src={carData[car]} alt="" id='car' className="img-fluid"/>
      
        
      </div>
      <button className='mint' onClick={changeCar}>change car</button>
    </>
  )
}
export default Car;
