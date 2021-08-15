import './App.css';
import WeekDays from './Components/WeekDays/WeekDays'
import Forecast1Day from "./Components/Forecast1Day/Forecast1Day"
import {useEffect, useState} from "react";

function App() {
    const [weeklyForecast, setWeeklyForecast] = useState();
    useEffect(() => {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res => res.json())
            .then(data => setWeeklyForecast(data));
    }, [])

  return (
    <div className="App">
        <section className="weekly-forecast">
            {weeklyForecast && weeklyForecast.map(dailyForecast => <Forecast1Day {...dailyForecast}/>)}
        </section>
    </div>
  );
}

export default App;
