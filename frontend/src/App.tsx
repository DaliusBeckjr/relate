import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// components
import Navbar from "./components/Navbar"

// pages
import Home from "./pages/Home"
import NewBlog from "./pages/NewBlog"
import ErrorBoundary from "./pages/ErrorBoundary"


// blogs { title, body }
// users { username, email, password }

//     path('blogs/', blogs.get_all_blogs),
//     path('blogs/single/<str:pk>', blogs.get_single_blog),
//     path('blogs/create/', blogs.create_blog),
//     path('blogs/update/<str:pk>', blogs.patch_blog),
//     path('blogs/delete/<str:pk>', blogs.delete_blog),

//     # user views
//     path('user/signup', users.sign_up),
//     path('user/login', users.login),
// ]

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>

        {/* protected routes */}
        <Route path="/" element={<Home />} />
        <Route path="/new-blog" element={<NewBlog />} />


        {/* public routes */}
        <Route path="*" element={<ErrorBoundary />} />

      </Routes>
    </Router>
  )
}

export default App
