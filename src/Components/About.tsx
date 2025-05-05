import Scramble from "./Scramble"

const About = () => {
  const scrambleArray = [
    "Über mich",
    "This is my part Nobody else speak..",
    "This is my part Nobodyy else speaak...",
    "https://youtu.be/6oHdAA3AqnE?t=209",
  ]


  return (
    <div className="flex justify-center items-center min-h-screen bg-rose-50">
      <div className=" text-gray-950 text-xl font-mono mx-7">
        <Scramble scramArray={scrambleArray}
        />
      </div>
    </div>
  )
}

export default About