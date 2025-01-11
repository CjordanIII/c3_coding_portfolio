import React from 'react'

const HeadComponetTwo:React.FC<{text:string}> = ({text}) => {
  return (
    <h1 className='chivo text-7xl font-medium'>{text}</h1>
  )
}

export default HeadComponetTwo