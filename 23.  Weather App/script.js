let search = document.querySelector("#serch")
let submit = document.querySelector("#submit")
let result = document.querySelector(".result")
let form = document.querySelector("form")
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`


const getweather = async (city) => {
    result.innerHTML = `<h2> Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const response = await fetch(url)
    const data = await response.json()
    return showweather(data)
}


const showweather = (data) => {
    if (data.cod == "404") {
        result.innerHTML = `<h2> City Not Found</h2>`
    }
    

    result.innerHTML = `
    
    <div class="icone"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>
    <div class="degree">
        <h2>${data.main.temp} ℃</h2>
        <h4> ${data.weather[0].main}  </h4>
    </div>
    
    `

}



form.addEventListener("submit", function (event) {



    getweather(search.value)

    event.preventDefault()///for page not reload on click submit button

})