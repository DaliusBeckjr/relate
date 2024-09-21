import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


// pages
import Home from './pages/Home'
import Create from './pages/Create'

// layouts
import RootLayout from './layouts/RootLayout'

// loaders
import { BlogsLoader } from './loaders/BlogsLoader'

// actions
import { BlogAction } from './actions/BlogAction'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<Home /> } loader={BlogsLoader}/>
      <Route path='/create' element={<Create />} action={BlogAction}/>
      
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
