

const Hero = (props) => {
    console.log(props);
    
  return (
    <div>
        <h2>Hero - {props.text}</h2>
        <p>{props.narx}</p>
    </div>
  )
}

export default Hero