import React from 'react'

const Text:React.FC<{text:string}> = ({text}) => {
  return (
    <p className='chivo text-3xl font-normal tracking-wider'>{text}</p>
  )
}

export default Text