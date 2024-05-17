import axios from "axios";
import timestamp from "unix-timestamp";
import 'dotenv/config';

const getExchangeRates = async (currency) => {
    const options = {
        method: 'GET',
        url: 'https://exchange-rate-api1.p.rapidapi.com/latest',
        params: { base: currency },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const data = response.data;

        return { currency: data.base, rate: data.rates.UAH, date: timestamp.toDate(data.time_update.time_unix) };
    } catch (error) {
        console.error(error);
    }

    return;
}

export default getExchangeRates;