import React, {useEffect, useState} from 'react';

const BMICalc = () =>{
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState();

    const inputHandler = (e) =>{
        let value = e.target.value;
        if(value < 0)value = 0;
        if(e.target.id === 'weight') setWeight(value);
        if(e.target.id === 'height') setHeight(value);
    }
    useEffect(() =>{
        if(weight > 0 && height > 0){
            let heightInMeters = height / 100;
            let bmivalue = weight / (heightInMeters * heightInMeters);
            setBmi(bmivalue.toFixed(2));
        }
    }, [weight, height]);

    const conditionalBmiClass = () =>{
        if(bmi < 18.5) return 'badge bg-secondary';
        else if(bmi >= 18.5 && bmi <= 24.9) return 'badge bg-success';
        else if(bmi >= 25 && bmi <= 29.9) return 'badge bg-warning text-dark';
        else if(bmi >= 30 && bmi <= 34.9) return 'badge bg-danger';
        else if(bmi >= 35 && bmi <= 39.9) return 'badge bg-danger';
        else if(bmi >= 40) return 'badge bg-danger';
        else return '';
    }

    return(
        <div className='calc-container'>
            <div className='row w-100 mb-4'>
                <div className='col-md-4 col-6'>
                    <label className='form-label' htmlFor='weight'>Weight(kg):</label>
                </div>
                <div className='col-md-8 col-6 mb-3'>
                    <input type="number" className='form-control' onInput={inputHandler} id='weight' placeholder='Enter weight' min="0" />
                </div>
                <div className='col-md-4 col-6'>
                    <label className='form-label' htmlFor='weight'>Height(cm):</label>
                </div>
                <div className='col-md-8 col-6'>
                    <input type="number" className='form-control' onInput={inputHandler} id='height' placeholder='Enter weight' min="0" />
                </div>
                <div className='col-12 mt-4 text-left'>
                    <h3>Your BMI is <span className={conditionalBmiClass()}>{bmi}</span></h3>
                </div>
            </div>
            <div className='row w-100'>
                <div className='col-12'>
                    <table className='table table-bordered mb-0'>
                        <thead>
                            <tr className='table-light'>
                                <th>Category</th>
                                <th>BMI Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Underweight</td>
                                <td>Less than 18.5</td>
                            </tr>
                            <tr>
                                <td>Normal weight</td>
                                <td>18.5 – 24.9</td>
                            </tr>
                            <tr>
                                <td>Overweight</td>
                                <td>25 – 29.9</td>
                            </tr>
                            <tr>
                                <td>Obesity (Class 1)</td>
                                <td>30 – 34.9</td>
                            </tr>
                            <tr>
                                <td>Obesity (Class 2)</td>
                                <td>35 – 39.9</td>
                            </tr>
                            <tr>
                                <td>Extreme Obesity (Class 3)</td>
                                <td>40 or greater</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BMICalc;