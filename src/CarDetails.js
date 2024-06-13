import React, { useState } from 'react'
import Display from './Display'


export default function CarDetails() {
    const [Car, setCarDetails] = useState([
        {
            name: "Audi",
            price:500000,
            description:"Audi AG (Audi) a subsidiary of Volkswagen AG, is an automobile manufacturer.",
            picture:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A4/10548/1689591781105/front-left-side-47.jpg?impolicy=resize&imwidth=420"
        },
        {
            name:"ferrari",
            price:3456780,
            description:"Ferrari has two dealers in India, located in Mumbai and New Delhi.",
            picture:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/F8-Tributo/7945/1598599471404/front-left-side-47.jpg?impolicy=resize&imwidth=420"
        },
        {
            name:"Toyota",
            price:467593990,
            description:"best brand compared to all brands",
            picture:"https://media.zigcdn.com/media/model/2021/Jan/fortuner-3_360x240.jpg"
        }
    ])
    return (
        < div >
        <Display cardetails={Car}/>

      
    </div >
  )
}
