import './App.css';
import TopButtons from './components/TopButtons';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import Temperature from './components/Temperature';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './Meteo/Meteos';


function App() {

  const fethMeteo=async()=>{
    const data=await getFormattedWeatherData({q:"london"})
    console.log(data)
  }

fethMeteo();
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons/>
      <Inputs />

      <TimeLocation/>
      <Temperature/>
      <Forcast title='Hearly Forcast'/>
      <Forcast title='Daily Forcast'/>
    </div>
  );
}

export default App;
