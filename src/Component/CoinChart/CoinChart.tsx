import React from 'react'

interface CoinChartProps{
  className?:string
}
const CoinChart:React.FC<CoinChartProps> = ({className}) => {
  return (
    <div className={className}>CoinChart</div>
  )
}

export default CoinChart