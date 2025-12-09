import React,{useState, useEffect} from 'react';

const PercentageCalc = () =>{
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState();

    const inputHandler1 = (e) =>{
        let value = e.target.value;
        if(value < 0)value = 0;
        setValue1(value);
    }
    const inputHandler2 = (e) =>{
        let value = e.target.value;
        if(value < 0)value = 0;
        setValue2(value);
    }

    useEffect(() =>{
        if(value1 > 0 && value2 > 0){
            let result = (value1 / 100) * value2;
            setResult(result.toFixed(2));
        }else{
            setResult(0);
        }
    }, [value1, value2]);

    return(
        <div className='calc-container'>
            <div className='row w-100'>
                <div className='col-12 mb-4'>
                    <h4 className='mb-3'>What is</h4>
                    <input type="number" onInput={inputHandler1} className='form-control d-block w-100 mb-3' min="0"/>
                    <h4 className='mb-3'>% of</h4>
                    <input type="number" onInput={inputHandler2} className='form-control d-block w-100 mb-3' min="0"/>
                </div>
                <div className='col-12'>
                    <h2>{result}</h2>
                </div>
            </div>
        </div>
    )
}

export default PercentageCalc;