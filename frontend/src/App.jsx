import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


// pages
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import { EditBlog } from './pages/EditBlog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';

// layouts
import RootLayout from './layouts/RootLayout';

// loaders
import { BlogsLoader } from './loaders/BlogsLoader';
import { BlogDetailsLoader } from './loaders/BlogDetailsLoader';


// actions
import blogAction from './actions/BlogAction';
import blogEditAction from './actions/blogEditAction';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<Home /> } loader={BlogsLoader}/>
      <Route path='/create' element={<CreateBlog />} action={blogAction}/>
      <Route path='/:id' element={<BlogDetails />} loader={BlogDetailsLoader} />
      <Route path='/edit/:id' element={<EditBlog />} action={blogEditAction}  loader={BlogDetailsLoader}/>
      <Route path='*' element={<NotFound /> } />
    </Route>
  )
)

function App() {

  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
