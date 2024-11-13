import React from 'react'

interface MarketOverviewChartProps{
  className?:string
}
const MarketOverviewChart:React.FC<MarketOverviewChartProps> = ({className}) => {
  return (
    <div className={className}>MarketOverviewChart</div>
  )
}

export default MarketOverviewChart