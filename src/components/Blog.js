import { useDispatch } from "react-redux";
import { blogByAuthor, blogByTag } from "../redux/actions";
export default function Blog({ info }) {
  const dispatch = useDispatch();

  const handleTagFilter = (tagName) => {
    dispatch(blogByTag(tagName));
  };

  const handleAuthorFilter = (authorName) => {
    dispatch(blogByAuthor(authorName));
  };

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={info.thumbnail} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p
            className="text-sm font-medium text-indigo-600 cursor-pointer"
            onClick={() => handleTagFilter(info.tag)}
          >
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {info.tag}
            </span>
          </p>
          <a href="#" className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{info.title}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div
            className="flex-shrink-0"
            onClick={() => handleAuthorFilter(info.authorName)}
          >
            <img
              className="h-10 w-10 rounded-full"
              src={info.authorAvatar}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p
              className="text-sm font-medium text-gray-900 hover:underline"
              onClick={() => handleAuthorFilter(info.authorName)}
            >
              {info.authorName}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{info.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span> {info.readingTime} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
