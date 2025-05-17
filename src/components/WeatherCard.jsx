import './WeatherCard.css'
import { CiSearch } from "react-icons/ci";
import { useContext } from 'react';
import weatherContext from '../context/weatherContext';
import clear from '../assets/weather/clear.png'
import few_cloud from '../assets/weather/few_cloud.png'
import mist from '../assets/weather/mist.png'
import rain from '../assets/weather/rain.png'
import scattered_cloud from '../assets/weather/scattered_cloud.png'
import shower_rain from '../assets/weather/shower_rain.png'
import snow from '../assets/weather/snow.png'
import thunder_strom from '../assets/weather/thunder_strom.png'

const WeatherCard = () =>{
    const {state, handleOnChange, handleOnSubmit} = useContext(weatherContext)

    const {main,name,wind,weather} = state.weatherData
 
    const allWeather = {
        '01d':clear,
        '04d':scattered_cloud,
        '03d':scattered_cloud,
        '02d':few_cloud,
        '50d':mist,
        '13d':snow,
        '09d':shower_rain,
        '10d':rain,
        '09d':rain,
        '11d':thunder_strom
    }

    return(
        <div className="card">
            <form className='form-container' onSubmit={handleOnSubmit}>
                <input placeholder='Search' className='input-field' onChange={handleOnChange} type="text" value={state.searchText}/>
                <button type='submit' className='search-btn'><CiSearch/></button>
            </form>
            <figure className='figure-container'>
                <img src={allWeather[weather[0]?.icon]||""} alt="" />
            </figure>
            <section>
                <div className="location-temp">
                    <h1 className='temprature'>{Math.floor(main?.temp)||'--'}<sup>o</sup>C</h1>
                    <h2 className='location'>{name|| '--'}</h2>
                </div>

                <div className='other-details'>
                    <div className='other-details-item'>
                        <figure className='other-details-imgcont'>
                            <img src="/humidity.png" alt="" />
                        </figure>
                        <div className="other-details-desc">
                            <h3>{main?.humidity||'--'}%</h3>
                            <h4>Humidity</h4>
                        </div>
                    </div>
                    <div className='other-details-item'>
                        <figure className='other-details-imgcont'>
                            <img src="/wind.png" alt="" />
                        </figure>
                        <div className="other-details-desc">
                            <h3>{wind?.speed||"--"} Km/h</h3>
                            <h4>Wind Speed</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WeatherCard