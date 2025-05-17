import WeatherCard from "./components/WeatherCard";
import './App.css'
import weatherContext from "./context/weatherContext";
import { useReducer, useEffect } from "react";
import reducer from "./reducer/weatherDataReducer";
const App = () => {

  const initialState = {
    searchText: "",
    weatherData:{},

  }
  
  const [state, dispatch] = useReducer(reducer,initialState)

  
  const fetchData = async(city) =>{
    try{
      
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      dispatch({type:"UPDATE_WEATHER", value:data})
      
    }
    catch(err){
      console.log("Error",err)
    }
    
  }

  
  useEffect(()=>{
    fetchData("Nagpur")
  },[])

  const handleOnChange = (e) =>{
    dispatch({type:"UPDATE_SCREEN", value:e.target.value})
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    if(!state.searchText) return
    fetchData(state.searchText)
    dispatch({type:'UPDATE_SCREEN',value:""})
  }
  
  return (
    <div className="cardContainer">
      <weatherContext.Provider value={{state, dispatch, handleOnChange, handleOnSubmit}}>
        <WeatherCard />
      </weatherContext.Provider>
    </div>
  )
}

export default App;