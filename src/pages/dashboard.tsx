function DashboardPage() {
  return (
    <main className="flex bg-gray-950">
      {/* Left Bar - Server List */}
      <div className="flex flex-col min-h-screen h-screen px-2 py-2 w-16 bg-[#1E1F22]">
        <div className="overflow-y-auto">
          <ul className="text-center">
            <li>
              <a href="#">
                <img
                  src="/vite.svg"
                  alt="discord"
                  className="w-12 h-12 rounded-full mx-auto"
                />
              </a>
            </li>

            {/* Seperator */}
            <li className="border-b border-gray-850 border-2 mx-3 mt-3"></li>

            <li className="mt-3">
              <a href="#">
                <img
                  src="./vite.svg"
                  alt="laravel"
                  className="w-12 h-12 rounded-full mx-auto"
                />
              </a>
            </li>

            {/* Left White Bar */}
            <span
              style={{
                position: "absolute",
                top: "142px",
                left: "-10px",
              }}
              className="border-r-4 rounded-2xl border-gray-300 text-gray-300 py-3"
            >
              0
            </span>

            <li className="mt-3">
              <a href="#">
                <img
                  src="./vite.svg"
                  alt="tailwind"
                  className="w-12 h-12 rounded-2xl mx-auto"
                />
              </a>
            </li>

            <li className="mt-3">
              <a href="#">
                <img
                  src="./vite.svg"
                  alt="vue"
                  className="w-12 h-12 rounded-full mx-auto"
                />
              </a>
            </li>

            {/* Plus Icon */}
            <li className="mt-3">
              <a
                href="#"
                className="w-12 h-12 bg-gray-775 hover:bg-green-500 text-green-500 hover:text-white inline-block rounded-full"
              >
                <svg
                  fill="currentColor"
                  className="mt-3 mx-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                  ></path>
                </svg>
              </a>
            </li>

            {/* Navigate Icon */}
            <li className="mt-2">
              <a
                href="#"
                className="w-12 h-12 bg-gray-775 hover:bg-green-500 text-green-500 hover:text-white inline-block rounded-full"
              >
                <svg
                  fill="currentColor"
                  className="mt-3 mx-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                  ></path>
                </svg>
              </a>
            </li>

            {/* Separator */}
            <li className="border-b border-gray-800 border-2 mx-3 mt-3"></li>

            {/* Download Icon */}
            <li className="mt-3">
              <a
                href="#"
                className="w-12 h-12 bg-gray-775 hover:bg-green-500 text-green-500 hover:text-white inline-block rounded-full"
              >
                <svg
                  fill="currentColor"
                  className="mt-3 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Area */}
      <div className="flex flex-1 flex-col min-h-screen h-screen">
        {/* Top Bar */}
        <div className="flex text-white h-12 bg-[#303338]">
          {/* Top Bar Left */}
          <div
            className="bg-gray-875 w-56 flex-none flex items-center justify-between px-3 py-2 border-b border-gray-900"
            style={{
              borderTopLeftRadius: "5px",
            }}
          >
            <div className="text-sm">Discord UI remade With TailwindCSS</div>
            <button>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Top Bar Right */}
          <div className="flex-1 bg-gray-775 flex items-center justify-between border-b border-gray-900 px-4 ">
            {/* Left Items */}
            <div className="flex items-center">
              <div className="text-gray-500 text-2xl">#</div>
              <div className="ml-2 text-sm text-white">general</div>
              <a href="#">
                <div className="border-l pl-3 ml-3 border-gray-600 text-xs text-gray-400">
                  general discussion of discord ui remade in tailwindcss
                </div>
              </a>
            </div>

            {/* Right Items */}
            <div className="flex items-center">
              <a href="#" className="ml-4">
                <svg
                  className="w-6 h-6 text-gray-300 hover:text-gray-200"
                  fill="currentColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                </svg>
              </a>

              <a href="#" className="ml-4">
                <svg
                  className="w-6 h-6 text-gray-300 hover:text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="secondary"
                    d="M2.24 20.35l6.5-7.5a1 1 0 0 1 1.47-.06l1 1a1 1 0 0 1-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z"
                  ></path>
                  <path
                    className="primary"
                    d="M15 15.41V18a1 1 0 0 1-.3.7l-1 1a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.4l1-1A1 1 0 0 1 6 9h2.59L13 4.59V3a1 1 0 0 1 1.7-.7l7 7A1 1 0 0 1 21 11h-1.59L15 15.41z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="ml-4">
                <svg
                  className="w-6 h-6 text-gray-300 hover:text-gray-200"
                  fill="currentColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                </svg>
              </a>
              <a href="#" className="ml-4">
                <form action="#" className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded bg-gray-950 text-gray-200 text-xs px-2 py-1"
                  />
                  <span
                    className="absolute right-0 top-0 mr-1"
                    style={{ top: "6px" }}
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 hover:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        className="heroicon-ui"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      ></path>
                    </svg>
                  </span>
                </form>
              </a>
              <a href="#" className="ml-4">
                <svg
                  className="w-6 h-6 text-gray-300 hover:text-gray-200"
                  fill="currentColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="#" className="ml-4">
                <svg
                  className="w-6 h-6 text-gray-300 hover:text-gray-200"
                  fill="currentColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-y-hidden">
          {/* Left Channel List */}
          <div
            className="bg-gray-875 w-56 flex-none flex flex-col justify-between bg-[#303338]"
            style={{
              borderRight: 1,
            }}
          >
            {/* Channel names */}
            <div className="overflow-y-auto text-sm">
              <ul className="px-2 py-3">
                <li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-875 rounded">
                  <a href="#" className="flex items-center">
                    <span className="text-xl">#</span>
                    <span className="ml-2">welcome</span>
                  </a>
                </li>
                <li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-875 rounded">
                  <a href="#" className="flex items-center">
                    <span className="text-xl">#</span>
                    <span className="ml-2">faq</span>
                  </a>
                </li>

                <button className="flex items-center text-gray-500 hover:text-gray-200">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                    ></path>
                  </svg>
                  <h3 className="uppercase tracking-wide font-semibold text-xs">
                    TAILWIND STUFF
                  </h3>
                </button>

                <li className="text-gray-200 px-2 bg-gray-725 rounded">
                  <a href="#" className="flex items-center">
                    <span className="text-xl">#</span>
                    <span className="ml-2">general</span>
                  </a>
                </li>
                <li className="text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-875 rounded">
                  <a href="#" className="flex items-center">
                    <span className="text-xl">#</span>
                    <span className="ml-2">tailwind-help</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Username and GC */}
            <div className="bg-gray-925 py-2 px-2 flex items-center justify-between">
              <div className="flex items-center">
                <a href="#">
                  <img
                    src="./vite.svg"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
                <div className="text-xs ml-2">
                  <div className="text-white">username</div>
                  <div className="text-gray-500 text-xxs">#9999</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <a href="#" className="hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                </a>
                <a href="#" className="ml-3 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" opacity=".1" fill="none"></path>
                    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path>
                  </svg>
                </a>
                <a href="#" className="ml-3 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Message Area */}
          <div className="bg-gray-775 flex-1 flex justify-between bg-[#303338] border-l-gray-300">
            <div className="flex-1 flex flex-col justify-between">
              {/* Message list */}
              <div className="chat text-sm text-gray-400 overflow-y-auto">
                {/* TODO: Extract into component */}
                <div className="flex ml-6 my-3 py-4 border-t border-gray-700">
                  <div className="flex-none">
                    <a href="#">
                      <img
                        src="./vite.svg"
                        alt="avatar"
                        className="w-12 h-12 rounded-full"
                      />
                    </a>
                  </div>
                  <div className="ml-5">
                    <div>
                      <a href="#" className="text-white hover:underline">
                        username
                      </a>
                      <span className="text-xs text-gray-600 ml-1">
                        12/31/2029
                      </span>
                    </div>
                    <div>
                      <div>Placeholder text</div>
                      <div>Placeholder text number two</div>
                    </div>
                  </div>
                </div>

                <div className="flex ml-6 my-3 py-4 border-t border-gray-700">
                  <div className="flex-none">
                    <a href="#">
                      <img
                        src="./vite.svg"
                        alt="avatar"
                        className="w-12 h-12 rounded-full"
                      />
                    </a>
                  </div>
                  <div className="ml-5">
                    <div>
                      <a href="#" className="text-white hover:underline">
                        username
                      </a>
                      <span className="text-xs text-gray-600 ml-1">
                        1/1/2030
                      </span>
                    </div>
                    <div>
                      <div>Placeholder text</div>
                      <div>Placeholder text number two</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="bg-gray-775 h-24 flex items-center mx-3">
                {/* Plus Icon */}
                <button className="px-2 py-2 h-10 bg-gray-725 rounded-l text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    ></path>
                  </svg>
                </button>

                {/* Search */}
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full text-sm h-10 px-2 py-2 bg-[#373A3F] text-gray-200 focus:outline-none rounded-lg"
                    placeholder="Search username"
                  />
                </div>

                {/* Right Icons */}
                <div className="px-2 py-2 bg-gray-725 rounded-r flex items-center justify-between h-10">
                  <button className="h-10 mr-2 bg-gray-725 rounded-l text-gray-300 hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                      ></path>
                    </svg>
                  </button>
                  <button className="h-10 mr-2 bg-gray-725 rounded-l text-gray-300 hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"
                      ></path>
                    </svg>
                  </button>
                  <button className="h-10 mr-2 bg-gray-725 rounded-l text-gray-500 hover:text-white">
                    <div
                      style={{
                        backgroundImage: "url('./vite.svg')",
                        filter: "grayscale(100%)",
                        backgroundPosition: "0px 0px",
                        backgroundSize: "242px 110px",
                        transform: "scale(1)",
                        backgroundRepeat: "no-repeat",
                        width: "22px",
                        height: "22px",
                        display: "bl",
                      }}
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;

{
  // Online Section
  /* <div className="bg-gray-875 w-56 flex-none px-3 py-3 overflow-y-auto">
              <h3 className="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">
                Online - 1
              </h3>
              <ul className="mb-6">
                <li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-725 py-1 my-2">
                  <a href="#" className="flex items-center">
                    <img
                      src="./static/icon_placeholder_avatar.svg"
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="ml-2">username</span>
                  </a>
                </li>
              </ul>
            </div> */
}
