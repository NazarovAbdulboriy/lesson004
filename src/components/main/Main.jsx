import Hero from "../hero/Hero"

const Main = () => {
    let str = "hello world"
  return (
    <div>
        <h2>Main</h2>
        <Hero text={str} narx={500} />
    </div>
  )
}

export default Main