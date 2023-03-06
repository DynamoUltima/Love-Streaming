import type { NextPage } from 'next'
import Dashboard from '../components/ui/dashboard'
import HomePage from './homePage'








const Home: NextPage = () => {
  return (
    <div className='relative  !h-screen flex flex-col overflow-auto '>

      
       <Dashboard/>
  
    </div>
  )
}

export default Home
