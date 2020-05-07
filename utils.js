function mungedLocation(locationData) {
    try {
        const firstItem = locationData[0];

        return {
            formatted_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };    
    } catch (e) {
        return {};
    }
}

function mungedWeather(weatherData) {
    try {
        const transformedData = weatherData.data.map((forecast) => {

            return {
                forecast: forecast.weather.description,
                time: forecast.valid_date
            };
        });

        return transformedData.slice(0, 8);
    } catch (e) {
        return [{}];
    }
}

function mungedTrails(trailsData) {
    try {
        const transformedTrailsData = trailsData.trails.map((trail) => {
            return {
                name: trail.name,
                location: trail.location,
                length: trail.length,
                type: trail.type,
                difficulty: trail.difficulty,
                stars: trail.stars
            };
            
        });
        return transformedTrailsData.slice(0, 10);
    } catch (e) {
        return [{}];
    }
}

module.exports = {
    mungedLocation,
    mungedWeather,
    mungedTrails
};