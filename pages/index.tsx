import type { NextPage } from 'next'
import Dashboard from '../components/ui/dashboard'
import HomePage from './homePage'

const Home: NextPage = () => {
  return (
    <div className='relaive !w-screen !h-screen flex flex-col overflow-auto'>

      <HomePage >
       <Dashboard/>

      </HomePage>

    </div>
  )
}

export default Home
