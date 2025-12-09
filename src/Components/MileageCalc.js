import React, { useState, useEffect } from 'react';

const MileageCalc = () =>{

    const [distance, setDistance] = useState(0);
    const [mileage, setMileage] = useState(0);
    const [fuelPrice, setFuelPrice] = useState(0);
    const [fuelCostPerKm, setFuelCostPerKm] = useState(0);
    
    const inputHandler = (e) =>{
        let value = e.target.value;
        if(value < 0)value = 0;

        if(e.target.id === 'distance') setDistance(value);
        if(e.target.id === 'mileage') setMileage(value);
        if(e.target.id === 'fuel') setFuelPrice(value);
    }

    useEffect(() =>{
        if(distance > 0 && mileage > 0 && fuelPrice > 0){
            let costperkm = (distance / mileage) * fuelPrice;
            setFuelCostPerKm(costperkm.toFixed(2));
        }else{
            setFuelCostPerKm(0);
        }
    }, [distance, mileage, fuelPrice]);

    return(
        <div className='calc-container'>
            <div className='row w-100 mb-4'>
                <div className='col-md-4 col-6'>
                    <label className='form-label' htmlFor='distance'>Distance(km):</label>
                </div>
                <div className='col-md-8 col-6'>
                    <input type="number" onInput={inputHandler} className='form-control' id='distance' placeholder='Enter distance' min="0" />
                </div>
            </div>
            <div className='row w-100 mb-4'>
                <div className='col-md-4 col-6'>
                    <label className='form-label' htmlFor='mileage'>Mileage(km/L):</label>
                </div>
                <div className='col-md-8 col-6'>
                    <input type="number" onInput={inputHandler} className='form-control' id='mileage' placeholder='Enter distance' min="0" />
                </div>
            </div>
            <div className='row w-100 mb-4'>
                <div className='col-md-4 col-6'>
                    <label className='form-label' htmlFor='fuel'>Fuel price(per liter):</label>
                </div>
                <div className='col-md-8 col-6'>
                    <input type="number" onInput={inputHandler} className='form-control' id='fuel' placeholder='Enter distance' min="0" />
                </div>
            </div>

            <div className='mileage-result w-100'>
                <table className='table table-bordered mb-0'>
                    <thead>
                        <tr>
                            <th>Units</th>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Distance(km)</td>
                            <td>{distance}</td>
                        </tr>
                        <tr>
                            <td>Mileage(km/L)</td>
                            <td>{mileage}</td>
                        </tr>
                        <tr>
                            <td>Fuel price(per liter)</td>
                            <td>{fuelPrice}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className='table-light'>
                            <th>Fuel Cost</th>
                            <th>{fuelCostPerKm}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default MileageCalc;