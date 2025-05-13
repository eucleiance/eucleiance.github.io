const Footer = () => {
  return (

    // Sticky Footer Easy Method

    <div
      className='relative h-[800px]'
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='fixed h-[800px] w-full bottom-0 flex flex-col justify-center items-center align-middle bg-gray-950'>
        <div className="text-rose-100 font-canela-thin text-3xl "> Footer </div>
      </div>
    </div>

  )
}

export default Footer
