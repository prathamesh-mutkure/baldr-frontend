import { Link } from "react-router-dom";

// bg-[url('/images/landing/bg-noise.png')] bg-repeat

function HomePage() {
  return (
    <main>
      <div className="flex flex-row gap-4 min-h-screen w-auto bg-black justify-start z-[1] relative">
        <div className="flex flex-col justify-between h-screen w-1/2 p-12">
          <div className="text-white flex flex-col">
            <div className="flex flex-row justify-between items-center text-lg">
              <Link to="#">Home</Link>
              <Link to="#">Whitepaper</Link>
              <Link to="#">Usecases</Link>

              <Link to="/search/">
                <button className="py-2 px-6 bg-white rounded-xl">
                  <p className="text-black font-bold">DAPP</p>
                </button>
              </Link>
            </div>

            <div className="overflow-clip">
              <h1 className="text-[380px] leading-[380px] text-center font-heading">
                BALDR
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {[
              "Discord Disputes",
              "Telegram Disputes",
              "Discourse Disputes",
              "Other",
            ].map((item) => (
              <Link to="#">
                <div className="text-white font-light text-2xl">{item}</div>
              </Link>
            ))}
          </div>

          <div className="flex flex-row justify-between text-white text-lg font-light">
            <div className="flex flex-col justify-between gap-4">
              <Link to="#">baldr@conduit.work</Link>
              <Link to="#">conduit.works</Link>
            </div>

            <div className="flex flex-col justify-between gap-4 text-right ">
              <Link to="#">TWITTER</Link>
              <Link to="#">INSTAGRAM</Link>
            </div>
          </div>
        </div>

        <div className="content-center pointer-events-none z-[2] items-center flex flex-none flex-nowrap h-screen justify-center gap-2 fixed top-0 bottom-0 right-0 left-0 bg-[linear-gradient(220deg,rgba(255,255,255,0)_60.05382521119378%,hsl(0,0%,0%)_120.0062716057621%)]">
          <div className="flex-none h-screen relative w-full z-[1]">
            <div className="w-full h-full bg-repeat opacity-[0.15] bg-[url('/images/landing/bg-noise.png')]"></div>
          </div>
        </div>

        <div className="w-1/2 h-screen bg-white overflow-scroll">
          <div className="h-screen flex flex-col overflow-hidden">
            <div className="p-8">
              <h1 className="text-6xl">Discord Disputes</h1>
            </div>

            <div className="w-full">
              <img
                src="/images/landing/hero.webp"
                alt="Hero"
                className="h-[85%] self-center mx-auto"
              />
            </div>
          </div>

          <div className="h-screen bg-blue-500"></div>
          <div className="h-screen bg-orange-500"></div>
          <div className="h-screen bg-cyan-500"></div>
          <div className="h-screen bg-lime-400"></div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
