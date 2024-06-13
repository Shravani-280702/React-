import React from 'react'

export default function Display(props) {
    return (
        <div>
            {
                props.cardetails.map((Car) => (

                    <div>
                        <p>{Car.name}</p>
                        <p>{Car.price}</p>
                        <p>{Car.description}</p>
                        <img src={Car.picture} alt={Car.name} />

                    </div>
                )) 
            }
        </div>
    )
}
