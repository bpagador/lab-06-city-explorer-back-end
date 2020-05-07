const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const request = require('superagent');
const { mungedLocation, mungedWeather, mungedTrails } = require('./utils.js');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app. get('/location', async(req, res) => {
    try {
        const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_KEY}&q=${req.query.search}&format=json`);

        const mungedData = mungedLocation(data.body);
        res.json(mungedData);
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Sorry, something went wrong',
            e,
        });
    }
});

app. get('/weather', async(req, res) => {
    try {
        const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`);

        const mungedData = mungedWeather(data.body);

        res.json(mungedData);
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Sorry, something went wrong', 
            e, 
        });
    }

});

app. get('/trails', async(req, res) => {
    try {
        const data = await request.get(`https://www.hikingproject.com/data/get-trails?lat=${req.query.latitude}&lon=${req.query.longitude}&maxDistance=10&key=${process.env.TRAILS_KEY}`);

        const mungedTrail = mungedTrails(data.body);

        res.json(mungedTrail);
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Sorry, something went wrong', 
            e, 
        });
    }

});


app.listen(PORT, () => console.log(`running on port ${PORT}`));

