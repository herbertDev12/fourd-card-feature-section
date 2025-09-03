import './index.css'
import './App.css'
import GridContainer from './GridContainer'




function App() {

  return (
    <>
     <div className='mt-14'>
        <div className='text-3xl '> 
          <h1 className='font-extralight text-gray-500 mt-6'>Reliable, efficient delivery</h1>
          <h1 className='text-gray-600 font-semibold'>Powered by Technology</h1>
        </div>
        
        <p className="max-w-2xl mx-auto text-center leading-relaxed 
             md:max-w-md lg:max-w-lg
             break-words hyphens-auto mt-5">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
        </p>
     </div>   
      <GridContainer/>
    </>
  )
}

export default App
