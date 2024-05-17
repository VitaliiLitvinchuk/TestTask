import server from "express";
import getExchangeRates from "./src/currency/get.js";
import { rates } from "./src/database/index.js";
import cors from "cors";

const app = server();

app.use(cors());

const serverCurrencies = ['USD', 'EUR'];

setInterval(async () => {
  serverCurrencies.forEach(async (value) => {
    await rates.create({
      ...await getExchangeRates(value)
    });
  });
}, 60_000);

app.get("/get-exchange-currency", async (request, response) => {
  const currencies = await Promise.all(serverCurrencies.map(async (value) => {
    return { [value]: await rates.findAll({ where: { currency: value }, attributes: ['date', 'rate'] }) };
  }));

  response.send({
    currencies: currencies.reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {})
  });
});

app.listen(5000);