import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom"


// pages
import  Home  from './pages/Home';
import  Create  from './pages/Create';

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
