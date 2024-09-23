import './App.css';
import Calendar from './components/calendar'



const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for this week</h1>
      <h2>This is a nice schedule</h2>
      <Calendar />
    </div>
  )
}

export default App