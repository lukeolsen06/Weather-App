import SearchBar from './components/SearchBar'
import TitleSection from './components/TitleSection'
import WeatherCardList from './components/WeatherCardList'
import GlobalMap from './components/Globe'

function App() {

  const backgroundColor = {
    backgroundColor: 'oklch(88.2% 0.059 254.128)',
    minHeight: '100vh'
  }

  return (
    <>
      <div className="App" style={backgroundColor}>
        <TitleSection />
        <SearchBar />
        <WeatherCardList />
        <GlobalMap />
      </div>
    </>
  )
}

export default App
