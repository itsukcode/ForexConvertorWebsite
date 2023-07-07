import React, { useEffect } from 'react';

const table = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = function() {
            new window.TradingView.widget({
                "feedMode": "all_symbols",
                "colorTheme": "light",
                "isTransparent": false,
                "displayMode": "regular",
                "width": "5000",
                "height": "500",
                "locale": "in"
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <div id="tradingview-widget-container"></div>

    );
};

export default table;
