import React from 'react'
// import Contact1 from './test_files/Contact1'
// import Test from './test_files/Recharts/Test'
// import Tests2 from './test_files/Tests2'
// import Layout from './test_files/Layout'

import Navigation from './Component/Navigation/Navigation'
import CoinChart from './Component/CoinChart/CoinChart'
import MarketTrend from './Component/MarketTrend/MarketTrend'
const App: React.FC = () => {
  return (
    <div className='h-screen'>
        <Navigation className='border flex py-2'/>
        <div className='h-full grid grid-rows-2'>
          <CoinChart className='border border-red-500'/>
          <MarketTrend className='border border-yellow-500'/>
        </div>
    </div>
  )
}

export default App