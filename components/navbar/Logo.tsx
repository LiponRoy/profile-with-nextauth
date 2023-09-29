import React from 'react'

interface logoProps{
    title:React.ReactNode,
    subtitle?:React.ReactNode,
    image?:React.ReactNode
}
const Logo = ({title,subtitle,image}:logoProps) => {
  return (
    <div>{title}</div>
  )
}
export default Logo