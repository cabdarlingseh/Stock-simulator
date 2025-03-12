import axios from "axios";

const API_KEY = 'FJCIAJ6H6FITDI7S';
const BASE_URL = 'https://www.alphavantage.co/query';

export const getStockPrice = async (symbol) => {
    const response = await axios.get(BASE_URL, {
        params: {
            function: 'TIME_SERIES_INTRADAY',
            symbol,
            interval: '1min',
            apikey: API_KEY,
        },
    });

    const time_interval = response.data['Time Series (1min)'];
    const latest = Object.values(time_interval)[0];
    return parseFloat(latest['4. close']);
};


export const getStockHistory = async (symbol) => {
    const response = await axios.get(BASE_URL, {
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol,
            apikey: API_KEY,
        },
    });
    return response.data['Time Series (Daily)']
};