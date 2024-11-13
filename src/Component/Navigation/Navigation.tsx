import React from 'react'

interface NavigationProps{
  className?:string,
}
const Navigation:React.FC<NavigationProps> = ({className}) => {
  return (
    <div className={className}>
      Navigation
      </div>
  )
}

export default Navigation