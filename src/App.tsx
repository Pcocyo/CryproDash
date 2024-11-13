import React from 'react'
// import Contact1 from './test_files/Contact1'
// import Test from './test_files/Recharts/Test'
// import Tests2 from './test_files/Tests2'
// import Layout from './test_files/Layout'

import Navigation from './Component/Navigation/Navigation'
import SearchCoin from './Component/SearchCoin/SearchCoin'
const App: React.FC = () => {
  return (
    <div>
        <div>
          <Navigation/>
          <SearchCoin/>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default App