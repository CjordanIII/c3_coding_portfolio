

const HeadComponetOne:React.FC<{text:string}> = ({text}) => {
  return (
    <h1 className='chivo xl:text-8xl font-bold text-2xl'>{text}</h1>
  )
}

export default HeadComponetOne