import React from "react";
import { useSelector } from "react-redux";
import Blog from "./Blog";
export default function BlogList() {
  const blogs = useSelector((state) => state.blogs);
  const filter = useSelector((state) => state.filter);

  const filterByTag = (blog) => {
    const { tag } = filter;
    if (tag !== "") {
      return tag.includes(blog?.tag);
    }
    return true;
  };

  const filterByAuthor = (blog) => {
    const { author } = filter;
    if (author !== "") {
      return author.includes(blog?.authorName);
    }

    return true;
  };

  const filterByTitle = (blog) => {
    const { title } = filter;

    if (title !== "") {
      return blog.title.toLowerCase().includes(title.toLowerCase()) || blog.authorName.toLowerCase().includes(title.toLowerCase()) || blog.tag.toLowerCase().includes(title.toLowerCase());
    }

    return true;
  };

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs
        .filter(filterByAuthor)
        .filter(filterByTag)
        .filter(filterByTitle)
        .map((item) => (
          <Blog info={item} key={item.id} />
        ))}
    </div>
  );
}
