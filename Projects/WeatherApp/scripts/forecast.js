const key = "ssvqrGntwYgxSLf7U7lEpJyoykezFnxm";

const getCurrentWeather = async (locationKey) => {

    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query = `${locationKey}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]

}

const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]

}

// getCity("London")
//     .then(data => {
//         console.log(data)
//         return getCurrentWeather(data.Key)
//     })
//     .then(data2 => {
//         console.log(data2)
//     })
//     .catch(err => {console.log(err)})

