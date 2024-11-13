import React from 'react'

interface SearchCoinProps{
  className?:string
}
const SearchCoin:React.FC<SearchCoinProps> = ({className}) => {
  return (
    <div className={className}>SearchCoin</div>
  )
}

export default SearchCoin