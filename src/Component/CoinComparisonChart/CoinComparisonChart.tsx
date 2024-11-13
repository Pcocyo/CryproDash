import React from 'react'

interface CoinComparisonChartProps{
  className?:string
}
const CoinComparisonChart:React.FC<CoinComparisonChartProps> = ({className}) => {
  return (
    <div className={className}>CoinComparisonChart</div>
  )
}

export default CoinComparisonChart