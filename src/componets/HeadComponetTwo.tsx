import React from 'react'

const HeadComponetTwo:React.FC<{text:string}> = ({text}) => {
  return (
    <div className='chivo text-7xl font-medium'>{text}</div>
  )
}

export default HeadComponetTwo