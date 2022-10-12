import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, Routes } from 'react-router-dom';
import App from '../App';
import Navbar from '../common/Navbar';
import Contact from '../pages/Contact/Contact';
import Experience from '../pages/Experience/Experience';



// export const router = createBrowserRouter([
//   {
//     path: '*',
//     element: <Navbar/>
//   },
//   {
//     path: '/',
//     element: <Home/>,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: '/contact',
//     element: <Contact/>
//   },
// ])


export const CreateRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
      </Routes>
    </BrowserRouter>
  )
}