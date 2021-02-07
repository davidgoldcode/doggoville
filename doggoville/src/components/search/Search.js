import { useAppContext } from "../../context/state";

// Styled Components
import { Div, SearchButton, Span } from "./search-styling";

const Search = () => {
  const { state, dispatch } = useAppContext();

  return (
    <Div>
      <SearchButton onClick={() => dispatch({ type: "TOGGLE_MODAL" })}>
        <svg width="24" height="24" fill="none">
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span>
          Quick search
          <span className="hidden sm:inline"> for anything</span>
        </span>
        <Span>
          <span className="sr-only">Press </span>
          <kbd className="font-sans">
            <abbr title="Command" className="no-underline">
              ⌘
            </abbr>
          </kbd>
          <span className="sr-only"> and </span>
          <kbd className="font-sans">K</kbd>
          <span className="sr-only"> to search</span>
        </Span>
      </SearchButton>
    </Div>
  );
};

export default Search;
