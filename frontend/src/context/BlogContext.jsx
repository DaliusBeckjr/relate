/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const BlogsContext = createContext();

export  const BlogsReducer = (state, action) => {
    switch (action.type) {
        case "SET_BLOGS":
            return {
                blogs: action.payload
            };
        case "CREATE_BLOG":
            return {
                blogs: [...state.blogs, action.payload]
            };
        case "DELETE_BLOG":
            return {
                blogs: state.blogs.filter((b) => b.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export const BlogsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BlogsReducer, {
        blogs: []
    });

    return (
        <BlogsContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogsContext.Provider>
    );
};