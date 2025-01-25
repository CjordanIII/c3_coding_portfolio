import React from 'react'

const Text:React.FC<{text:string}> = ({text}) => {
  return (
    <p className='chivo text-3xl font-normal tracking-wider max-md:text-base'>{text}</p>
  )
}

export default Text