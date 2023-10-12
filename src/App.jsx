import About from './pages/About';
import Hero from './pages/Hero';
import HomeLayout from './pages/HomeLayout';
import Services from './pages/Services';
import Works from './pages/Works';
import ContactUs from './pages/ContactUs'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import Error from './pages/Error'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
        errorElement: <ErrorElement />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: 'Works',
        element: <Works />,
        errorElement: <ErrorElement />
      },
      {
        path: 'services',
        element: <Services />,
        errorElement: <ErrorElement />
      },
      {
        path: 'contact',
        element: <ContactUs />,
        errorElement: <ErrorElement />
      }
    ]
  }

])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;
