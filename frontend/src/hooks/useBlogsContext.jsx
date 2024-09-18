import { useContext } from "react";
import { BlogsContext } from "../context/BlogContext";

export const useBlogsContext = () => {
    const context = useContext(BlogsContext);

    if (!context) {
        throw new Error("useBlogsContext must be used within a BlogsContextProvider");
    }

    return context;
};