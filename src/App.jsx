import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

  const countriesPromise = fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())

  return (
    <>
      <Suspense fallback = {<h3>She going........</h3>}>
          <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
