import React from 'react'

interface MarketTrendProps{
  className:string;
}
const MarketTrend:React.FC<MarketTrendProps> = ({className}) => {
  return (
    <div className={className}>MarketTrend</div>
  )
}

export default MarketTrend