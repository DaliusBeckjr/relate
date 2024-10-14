/* eslint-disable react/prop-types */
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// pages
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import { EditBlog } from './pages/EditBlog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';



// layouts
import RootLayout from './layouts/RootLayout';

// loaders
import { BlogsLoader } from './loaders/BlogsLoader';
import { BlogDetailsLoader } from './loaders/BlogDetailsLoader';


// actions
import blogAction from './actions/blogAction';
import blogEditAction from './actions/blogEditAction';



function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout /> } errorElement={<NotFound />}>
  
        <Route 
          index 
          element={
            user ? <Home /> : <Navigate to='/login' replace/>
          } 
          loader={BlogsLoader}
        />
        <Route 
          path='/create'
          element={<CreateBlog />} 
          action={blogAction}
          />
        <Route 
          path='/:id' 
          element={<BlogDetails />} 
          loader={BlogDetailsLoader} 
        />
        <Route 
          path='/edit/:id' 
          element={<EditBlog />} 
          action={blogEditAction}  
          loader={BlogDetailsLoader}
        />
  
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<NotFound /> } />
      </Route>
    )
  )

  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
