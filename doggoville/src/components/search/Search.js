const Search = () => {
  return (
    <>
      <>
        <div className="border-b md:block hidden border-gray-200 flex items-center pt-4 justify-between sm:mb-20 sm:mx-0 sm:px-0">
          <button className="group leading-8 flex items-center space-x-3 sm:space-x-4 hover:text-purple-600 transition-colors duration-200 w-full py-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>
              Quick search
              <span className="hidden sm:inline"> for anything</span>
            </span>
            <span className="hidden sm:block text-sm leading-5 p-2 border border-gray-300 rounded-md">
              <span className="sr-only">Press </span>
              <kbd className="font-sans">
                <abbr title="Command" className="no-underline">
                  ⌘
                </abbr>
              </kbd>
              <span className="sr-only"> and </span>
              <kbd className="font-sans">K</kbd>
              <span className="sr-only"> to search</span>
            </span>
          </button>
        </div>
      </>
    </>
  );
};

export default Search;
