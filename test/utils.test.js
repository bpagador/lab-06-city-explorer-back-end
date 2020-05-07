// IMPORT MODULES under test here:
// import example from '../src/example.js';
const { mungedLocation, mungedWeather, mungedTrails } = require('../utils.js');
const data = require('../data/geo.json');
const weather = require('../data/weather.json');
const trails = require('../data/trails.json');

const test = QUnit.test;

test('should return pdx data when fed api reponse ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        'formatted_query': 'Portland, Multnomah County, Oregon, USA',
        'latitude': '45.5202471',
        'longitude': '-122.6741949'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungedLocation(data);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('should return empty object when input is invalid ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {};
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungedLocation(null);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('should return weather data for pdx when given pdx weather api response', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [
        {
            'forecast': 'Scattered clouds',
            'time': '2020-05-05'
        },
        {
            'forecast': 'Light snow',
            'time': '2020-05-06'
        },
        {
            'forecast': 'Few clouds',
            'time': '2020-05-07'
        },
        {
            'forecast': 'Few clouds',
            'time': '2020-05-08'
        },
        {
            'forecast': 'Broken clouds',
            'time': '2020-05-09'
        },
        {
            'forecast': 'Overcast clouds',
            'time': '2020-05-10'
        },
        {
            'forecast': 'Overcast clouds',
            'time': '2020-05-11'
        },
        {
            'forecast': 'Light rain',
            'time': '2020-05-12'
        },
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungedWeather(weather);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('should return empty object when input is invalid ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{}];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungedWeather(null);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('should return trails data for pdx when given pdx trails api response', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [
        {
            'name': 'Boulder Skyline Traverse',
            'location': 'Superior, Colorado',
            'length': 16.3,
            'type': 'Hike',
            'difficulty': 'black',
            'stars': 4.7
        },
        {
            'name': 'Bear Peak Out and Back',
            'location': 'Boulder, Colorado',
            'length': 5.7,
            'type': 'Hike',
            'difficulty': 'black',
            'stars': 4.6
        },
        {
            'name': "Sunshine Lion's Lair Loop",
            'location': 'Boulder, Colorado',
            'length': 5.3,
            'type': 'Hike',
            'difficulty': 'blue',
            'stars': 4.5
        },
        {
            'name': 'Green Mountain via Ranger/Saddle Rock Loop',
            'location': 'Boulder, Colorado',
            'length': 4.9,
            'type': 'Hike',
            'difficulty': 'black',
            'stars': 4.5
        },
        {
            'name': 'Walker Ranch',
            'location': 'Coal Creek, Colorado',
            'length': 7.6,
            'type': 'Hike',
            'difficulty': 'black',
            'stars': 4.5
        },
        {
            'name': 'Royal Arch Out and Back',
            'location': 'Boulder, Colorado',
            'length': 3.3,
            'type': 'Hike',
            'difficulty': 'black',
            'stars': 4.4
        },
        {
            'name': 'Mount Sanitas Loop',
            'location': 'Boulder, Colorado',
            'length': 3.2,
            'type': 'Hike',
            'difficulty': 'black',
            'stars': 4.2
        },
        {
            'name': 'Betasso Preserve',
            'location': 'Boulder, Colorado',
            'length': 6.7,
            'type': 'Hike',
            'difficulty': 'blue',
            'stars': 4.2
        },
        {
            'name': 'Marshall Mesa to Spring Brook Loop',
            'location': 'Superior, Colorado',
            'length': 11.1,
            'type': 'Hike',
            'difficulty': 'blue',
            'stars': 4.3
        },
        {
            'name': 'Sugarloaf Mountain',
            'location': 'Boulder, Colorado',
            'length': 1.4,
            'type': 'Hike',
            'difficulty': 'blue',
            'stars': 4.4
        }
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungedTrails(trails);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('should return empty object when input is invalid ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{}];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungedTrails(null);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});