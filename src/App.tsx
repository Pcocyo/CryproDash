import React from 'react'
// import Contact1 from './test_files/Contact1'
// import Test from './test_files/Recharts/Test'
// import Tests2 from './test_files/Tests2'
// import Layout from './test_files/Layout'
import {bitcoin_historical_data} from './Api/TestApi2'
const App: React.FC = () => {
  console.log(bitcoin_historical_data)
  return (
    <div>
      test
    </div>
  )
}

export default App