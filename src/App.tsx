import React from 'react'
// import Contact1 from './test_files/Contact1'
// import Test from './test_files/Recharts/Test'
// import Tests2 from './test_files/Tests2'
// import Layout from './test_files/Layout'

import Navigation from './Component/Navigation/Navigation'
import CoinChart from './Component/CoinChart/CoinChart'
import MarketTrend from './Component/MarketTrend/MarketTrend'
import CoinComparisonChart from './Component/CoinComparisonChart/CoinComparisonChart'
import MarketOverviewChart from './Component/MarketOverviewChart/MarketOverviewChart'
import SearchCoin from './Component/SearchCoin/SearchCoin'
const App: React.FC = () => {
  return (
    <div>
      <div className="h-screen w-screen md:hidden">
        <Navigation className='border flex py-2 md:row-span-4' />
        <div className='h-full grid grid-rows-2'>
          <CoinChart className='border border-red-500' />
          <MarketTrend className='border border-yellow-500' />
        </div>
      </div>

      <div className="h-[100vh] w-screen md:grid md:grid-cols-[5%,95%] sm:hidden md:block">
        <Navigation className='border flex py-2 md:row-span-4'/>
        <div className="flex flex-col h-[100vh] border border-red-600">
            <SearchCoin className='border'/>
            <CoinComparisonChart className='border'/>
            <CoinChart className='border border-red-500' />
          <div className="flex">
            <MarketOverviewChart className='border border-green-500'/>
            <MarketTrend className='border border-yellow-500'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App