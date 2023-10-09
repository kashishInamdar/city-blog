import  ReactDOM  from "react-dom/client";
import Posts from "./views/Posts/Posts";
import ReadPost from "./views/ReadPost/ReadPost";

import { createBrowserRouter , RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path : "/",
        element : <Posts />
    },
    {
        path : "/post/read/:id",
        element : <ReadPost />
    },
    {
        path : "*",
        element : <div>404 Not Found</div>
    }
])

root.render(<RouterProvider router={router} />)