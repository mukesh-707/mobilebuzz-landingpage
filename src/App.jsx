

function App() {
  

  return (
    <>
    <nav className="bg-purple-900 text-white flex justify-between lg:placeholder-violet-700">
     <span className="text-xl flex items-center mx-3 font-bold cursor-pointer hover:text-cyan-300">MobileBuzz</span>
      <ul className="px-28 py-4 flex space-x-11 justify-end">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Phone Catalogue</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>

    </nav >

    <main>
      <div className="bg-white flex justify-around">
        <div className="main py-40 pl-9">
          <div className="text-4xl">
            The best Smartphone is Now Available Grab The Deal!
          </div>
          <p className="py-3 w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt tenetur laudantium voluptatibus dolores corrupti error beatae, modi exercitationem velit.</p>
          <div className="my-4">
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-purple-900 hover:bg-white mx-2 hover:border-2 hover:border-black">Buy Now!</button>
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-purple-900 hover:bg-white mx-2 hover:border-2 hover:border-black">Contact Us!</button>

          </div>

        </div>
        <div className="flex items-center">
        <img src="src/ph.jpg" className="h-80 bg-white " alt="" />
      </div>
      </div>
    </main>

    {/* <footer className="bg-slate-500 h-5"></footer> */}
    
    </>
  )
}

export default App
