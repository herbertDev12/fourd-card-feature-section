import './styles/index.css'
import './styles/App.css'
import FeatureSection from './components/ui/FeatureSection'
import Header from './components/ui/Header'


function App() {

  return (
    <>
     <Header/>
     <div className="mt-5">
      <FeatureSection/>
     </div>     
    </>
  )
}

export default App
