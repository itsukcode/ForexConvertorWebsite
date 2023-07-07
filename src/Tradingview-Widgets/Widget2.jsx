import React, { useEffect } from 'react';

export default function Widget2() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
        script.async = true;
        script.innerHTML = `
      {
        "symbols": [
          ["FX:EURUSD|1D"],
          ["FX:GBPUSD|1D"],
          ["FX:USDJPY|1D"],
          ["OANDA:GBPJPY|1D"]
        ],
        "chartOnly": false,
        "width": 1300,
        "height": 500,
        "locale": "en",
        "colorTheme": "light",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }
    `
        document.querySelector('.tradingview-widget-container-widget').appendChild(script);

        return () => {
            document.querySelector('.tradingview-widget-container-widget').innerHTML = '';
        };
    }, []);

    return (
        <div className='mid'>
            <h1 className='head-3'>Market Summary ></h1>
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container-widget"></div>
            </div>
        </div>
    );
};
