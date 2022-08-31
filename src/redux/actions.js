import { FILTERBYAUTHOR, FILTERBYTAG, FILTERBYTITLE } from "./actionTypes";

export const blogByTag = (tagName) => {
  return {
    type: FILTERBYTAG,
    payload: tagName,
  };
};

export const blogByAuthor = (authorName) => {
  return {
    type: FILTERBYAUTHOR,
    payload: authorName,
  };
};

export const blogByTitle = (title) => {
    return {
      type: FILTERBYTITLE,
      payload: title,
    };
  };
