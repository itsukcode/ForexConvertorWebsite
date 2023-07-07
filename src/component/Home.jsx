import React, { useEffect } from 'react';
import "./CSS/home.css"
import Forex from "../Tradingview-Widgets/Widget1"
import Forex2 from "../Tradingview-Widgets/Widget2"

export default function Home() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
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
        });

        document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget')[0].innerHTML = '';
        };
    }, []);

    return (
        <div className='back'>
            <div className='container-1'>
                <h1 className='head'>FOREX MASTER</h1>
                <p className='para'> Empowering Your Financial Journey</p>
                <button class="my-button"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA45JREFUaEPFWtFt3TAMpDJLgQLtGOnrBB0nnwG6TCbI6xopkGWiQpYtUzTJo2S39ddDLFF3Io+k5CTynkREWR/gvHJNXv2y4Ljo+QeUlCUqAWvtqzCdtMOnS1PQA3DtNgCOHPJ01BokYK6a77kKZDWRbvO25CJR9PvqQ5tTBy8E2JO+J1PxwryPbwD9EAFp90Ag6IEIvsiYFfy822cJTDi7TqmshkXsa4CHkOUBYzvLBjAJ0cMtWTUHlaq5Pdk8sIEoIg66vmmIE2hJYMRISyEBDvnXD6L8TESf99EcQfvrO1F6ovTtxbVqhmCcQBmpaoBHW/udX9+I6MsGyisuRPSb0u2rSmCbmF9zt/xkGo6LWO6Ysb17XQNZSdqzNAAcAgm0+UECjZfY0QOOU1lstwYJNEBoQfi+aOjjmSgxDalujGlonZrsTk4YtwC2mJaVuQ+hlO9vmWkIpI1dQwXh2rRoc6AHmrM+7rWKNBUXgCwwoAcEwQ5NzWZdmC0hCFJFy0KRzBUEaIrY1ZCSjoNZ6XwIbTvZASwZsjR37DGaPzNJxAkEilgZEvGAV1kj8zmU/0LAA4Dab5XgMbbnm7npHVyXNOZPh9A6MZiFylmllP71Kb9K5SxZIuWa5kIEy8BVdjJE0Pwu0i8rZCxJo94GAUTvpVSlB3gDp8oaLYC6y+n5fpIRIeQUBAiAd5dOGuXnB36jg+w7zWMsj6IF5Akr3VK3HSgLqZUeQ4MiVpu5JmKvUB16odxdY5giXl10eR1AO4T6+4gHD3UE9zjNA7BtmgAAQ2hLwWaljxIQLas6bYKA2wsp3Wif6mP3THMaKCuNFiKjG90rsTihj2pgb4ONbwLOgcavxK2VaJcCJujdBealgNIL4Thb7HIRO1mInwd6DSxHyp9E6VPXkhxjYPRIiXPtMsI9kLAeaQOEQgBpaoPFQ0M5Wx75Ww6xCKh3W4pG5D4phS+4lbKtC4ZQvq8xbCHu7NoXW62j9S8BmjUAT60DejOnxPASWof7vXeihydKjy9ubfFCSAWtM6kEgk5w8/rAB46qKetq0QGjvIprQIvhQ+kfiOKoiMH+tluJSu5I0awPAwBMWjOeF8bilVj1wF/6yDfgyJME2Eoo72ughAdgN6DYaAfz4c87WwjNfqEZ2OU61MxCZwLRUs4wuukJagipsM7wnIaHJ/oaOAkaTocDzhLA80//o4jFQa3iyuA/dFr2Qopb/2kAAAAASUVORK5CYII=" />Let's Start</button>

                <div className="tradingview-box">
                    <div className="tradingview-widget-container__widget"></div>
                </div>
            </div>

            <Forex />
            <Forex2 />
        </div>
    );
}

