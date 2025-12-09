import React, {useState, useEffect, useRef} from 'react';

const CurrencyCalc = () =>{
    const [currency, getCurrency] = useState({});
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('INR');

    const didFetchRef = useRef(false);

    useEffect(() =>{
        if(didFetchRef.current) return;
        didFetchRef.current = true;
        fetch('https://v6.exchangerate-api.com/v6/1edb79c64121e31bbda3c21b/latest/USD')
            .then(response => response.json())
            .then(data => getCurrency(data.conversion_rates))
            .catch(error => console.log('Error fetching currency data:', error));
    }, []);

    // Convert from amount1 to amount2
    const handleAmount1Change = (e) => {
        const val = e.target.value;
        setAmount1(val);

        if(val > 0 && currency1 && currency2) {
            // Convert: amount1 in currency1 -> USD -> amount2 in currency2
            const convertedValue = (val / currency[currency1]) * currency[currency2];
            setAmount2(convertedValue.toFixed(2));
        } else {
            setAmount2(0);
        }
    }

    // Convert from amount2 to amount1
    const handleAmount2Change = (e) => {
        const val = e.target.value;
        setAmount2(val);

        if(val > 0 && currency1 && currency2) {
            // Convert: amount2 in currency2 -> USD -> amount1 in currency1
            const convertedValue = (val / currency[currency2]) * currency[currency1];
            setAmount1(convertedValue.toFixed(2));
        } else {
            setAmount1(0);
        }
    }

    // Recalculate when currency1 changes
    const handleCurrency1Change = (e) => {
        const newCurrency = e.target.value;
        setCurrency1(newCurrency);

        if(amount1 > 0 && newCurrency && currency2) {
            const convertedValue = (amount1 / currency[newCurrency]) * currency[currency2];
            setAmount2(convertedValue.toFixed(2));
        }
    }

    // Recalculate when currency2 changes
    const handleCurrency2Change = (e) => {
        const newCurrency = e.target.value;
        setCurrency2(newCurrency);

        if(amount1 > 0 && currency1 && newCurrency) {
            const convertedValue = (amount1 / currency[currency1]) * currency[newCurrency];
            setAmount2(convertedValue.toFixed(2));
        }
    }

    return(
        <div className='calc-container'>
            <div className='row w-100 mb-4'>
                <div className='col-md-10 col-12'>
                    <div className='d-flex align-items-center gap-2'>
                        <input 
                            type="number" 
                            value={amount1}
                            onChange={handleAmount1Change}
                            className='form-control' 
                            placeholder='Amount' 
                            min="0" 
                        />
                    </div>
                </div>
                <div className='col-md-2 col-12'>
                    <select 
                        className='form-select' 
                        value={currency1}
                        onChange={handleCurrency1Change}
                    >
                        {
                            Object.keys(currency).map((keyName) => (
                                <option key={keyName} value={keyName}>{keyName}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className='row w-100'>
                <div className='col-md-10 col-12'>
                    <div className='d-flex align-items-center gap-2'>
                        <input 
                            type="number" 
                            value={amount2}
                            onChange={handleAmount2Change}
                            className='form-control' 
                            placeholder='Amount' 
                            min="0" 
                        />
                    </div>
                </div>
                <div className='col-md-2 col-12'>
                    <select 
                        className='form-select' 
                        value={currency2}
                        onChange={handleCurrency2Change}
                    >
                        {
                            Object.keys(currency).map((keyName) => (
                                <option key={keyName} value={keyName}>{keyName}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CurrencyCalc;