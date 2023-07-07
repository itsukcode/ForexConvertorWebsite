import React, { useEffect } from 'react';
// import "./CSS/home.css"

export default function Widget1() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [

                {
                    proName: 'FX_IDC:EURUSD',
                    title: 'EUR/USD',
                },
                {
                    "description": "GBP/USD",
                    "proName": "FX:GBPUSD"
                },
                {
                    "description": "USD/INR",
                    "proName": "FX_IDC:USDINR"
                },
                {
                    "description": "USD/JPY",
                    "proName": "FX:USDJPY"
                }
            ],
            colorTheme: 'light',
            isTransparent: false,
            showSymbolLogo: true,
            locale: 'en',
            width: 770,
            height: 400,
        });

        document.getElementsByClassName('tradingview-widget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget')[0].innerHTML = '';
        };
    }, []);

    return (
        <div className='adjust'>
            <h1 className='head-2'>Forex Cross Rates Data</h1>
            <p className='para-2'>Forex cross rates data is typically displayed in financial platforms and trading systems, providing real-time or historical information about the exchange rates between various currency pairs. </p>
            <div className="tradingview-box-1">
                <div className="tradingview-widget"></div>
            </div>
        </div>
    );
}

