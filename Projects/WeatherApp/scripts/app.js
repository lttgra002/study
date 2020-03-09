const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details")
const time = document.querySelector("img.time")
const icon = document.querySelector(".icon img")

const updateUI = (data) => {

    //Rather than create these variables, we can use the destructuring method
    console.log(data);
    // const getDetails = data.getDetails
    // const weather = data.weather
    //We can do destructing like this
    const  { getDetails, weather } = data;

    details.innerHTML = `
            <h5 class="my-3">${getDetails.EnglishName}</h5>
            <div class="my-3 conditions">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span class="temp">${weather.Temperature.Metric.Value}</span>
              <span class="degree">&deg;C</span>
            </div>
    `
    
    //====Check time of day
    // if(weather.IsDayTime){
    //     time.src = "img/day.svg"
    // } else {
    //     //It seems like you can use either. I will need to check this up
    //     time.setAttribute("src", "img/night.svg")
    // }

    //==Check time of Day using the Ternary Operator

    let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg"
    time.setAttribute("src", timeSrc)

    //====Add Icon

    //My Way
    // icon.innerHTML = `<img src="img/icons/${weather.WeatherIcon}.svg">`

    //Lesson way
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute("src", iconSrc)

    //Remove the class if present 
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none")
    }
    
}


const updateCity = async (city) => {

    console.log(city)

    const getDetails = await getCity(city)
    const weather = await getCurrentWeather(getDetails.Key)


    // //My Initial Code
    // let cityUI = document.querySelector("h5");
    // let conditionsUI = document.querySelector(".conditions");
    // let temperature = document.querySelector(".temp");
    // let degrees = document.querySelector(".degree");

    // cityUI.innerText = getDetails.EnglishName
    // conditionsUI.innerText = weather.WeatherText
    // temperature.innerText = weather.Temperature.Metric.Value

    //Create an Object
    return {
        //We can use object short hand notation
        //getDetails: getDetails,
        getDetails,
        //weather: weather
        weather
    };


}



cityForm.addEventListener("submit", e => {

    e.preventDefault()

    //Use name attribute in HTML input field
    //Trim takes out any white space
    let city = cityForm.city.value.trim()

    //console.log(city)
    //Clear the form after using the enter button
    cityForm.reset()
    

    //Update the UI with the City Name
    updateCity(city)
        .then(data => {updateUI(data)})
        .catch(err => {console.log(err)})




})