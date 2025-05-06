const Footer = () => {
  return (

    // Sticky Footer Easy Method

    <div
      className='relative h-[800px]'
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='fixed h-[800px] w-full bottom-0 flex flex-col justify-center items-center align-middle bg-gray-950'>
        <div className="text-rose-100 font-canela-light text-3xl"> Canela Light </div>
        <div className="text-rose-100 font-canela-light-italic text-3xl "> Canela Light Italic </div>
        <div className="text-rose-100 font-canela-thin text-3xl "> Canela Thin </div>
        <div className="text-rose-100 font-canela-thin-italic text-3xl "> Canela Thin Italic</div>
        <div className="text-rose-100 font-canela-regular text-3xl "> Canela Regular </div>
        <div className="text-rose-100 font-canela-regular-italic text-3xl "> Canela Regular Italic </div>
        <div className="text-rose-100 font-xanh-regular text-3xl ">Xanh Regular</div>
        <div className="text-rose-100 font-xanh-italic text-3xl">Xanh Italic</div>
      </div>
    </div>

  )
}

export default Footer