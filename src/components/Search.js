import { useDispatch } from "react-redux";
import searchIcon from "../assets/search.svg";
import { blogByTitle } from "../redux/actions";
export default function Search() {
  const dispatch = useDispatch();
  const submitHandler = (value) => {
    dispatch(blogByTitle(value));
  };

  let typingTimer;
  let typeInterval = 2000;

  const handleInput = (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(submitHandler(e.target.value), typeInterval);
  };

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search by category / title / author name"
        onChange={handleInput}
      />
      <img
        className="inline h-6 cursor-pointer"
        src={searchIcon}
        alt="Search"
      />
    </div>
  );
}
