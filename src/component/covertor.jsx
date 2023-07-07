import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "../App.css"


const Converter = () => {

    const [rates, setRates] = useState({});
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                'https://api.freecurrencyapi.com/v1/latest?apikey=GeWjqJ5h56ovE3Fbxu39dSoLYW6HYzpp9P8DPLGr'
            );
            setRates(response.data.data);
        };
        fetchData();
    }, []);

    const convertCurrency = () => {
        const rate = rates[targetCurrency] / rates[baseCurrency];
        const converted = amount * rate;
        setConvertedAmount(converted);
    };

    return (
        <div>

            <div className="container" >
                <h2>Currency Converter</h2>
                <div>
                    <label >Base Currency:</label>
                    <select className="input-field" value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                        {Object.keys(rates).map((currency) => (
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Target Currency:</label>
                    <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
                        {Object.keys(rates).map((currency) => (
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className='btn-1' onClick={convertCurrency}>Convert</button>
                <div>
                    <h3>Converted Amount:</h3>
                    <p>{convertedAmount.toFixed(2)}</p>
                </div>
            </div>

        </div >
    );
};

export default Converter;
