import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


// pages
import Home from './pages/Home';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';

// layouts
import RootLayout from './layouts/RootLayout';

// loaders
import { BlogsLoader } from './loaders/BlogsLoader';
import { BlogDetailsLoader } from './loaders/BlogDetailsLoader';


// actions
import blogAction from './actions/BlogAction';
// import BlogDetails from './components/BlogDetails'
// import BlogDetailsLoader from './loaders/BlogDetailsLoader'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<Home /> } loader={BlogsLoader}/>
      <Route path='/create' element={<Create />} action={blogAction}/>
      <Route path="/:id" element={<BlogDetails />} loader={BlogDetailsLoader} />

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
