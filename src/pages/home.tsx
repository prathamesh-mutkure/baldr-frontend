import { Link } from "react-router-dom";

// bg-[url('/images/landing/bg-noise.png')] bg-repeat

function HomePage() {
  return (
    <main>
      <div className="flex flex-row gap-4 min-h-screen w-auto bg-black justify-start z-[1] relative">
        <div className="flex flex-col justify-between h-screen w-1/2 p-8">
          <div className="text-white flex flex-col">
            <div className="flex flex-row justify-around items-center">
              <Link to="#">Home</Link>
              <Link to="#">Whitepaper</Link>
              <Link to="#">Usecases</Link>

              <Link to="https://templofbaldr.arweave.dev/" target="_blank">
                <button className="py-2 px-6 bg-white rounded-lg">
                  <p className="text-black">DAPP</p>
                </button>
              </Link>
            </div>

            <div>
              <h1 className="font-extrabold text-[200px] text-center font-heading">
                BALDR
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {[
              "Discord Disputes",
              "Telegram Disputes",
              "Discourse Disputes",
              "Other",
            ].map((item) => (
              <Link to="#">
                <div className="text-white font-light">{item}</div>
              </Link>
            ))}
          </div>

          <div className="flex flex-row justify-between text-white">
            <div className="flex flex-col justify-between gap-4">
              <Link to="#">baldr@conduit.work</Link>
              <Link to="#">conduit.works</Link>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <Link to="#">TWITTER</Link>
              <Link to="#">INSTAGRAM</Link>
            </div>
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
