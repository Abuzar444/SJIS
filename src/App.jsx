import About from './pages/About';
import Hero from './pages/Hero';
import HomeLayout from './pages/HomeLayout';
import Services from './pages/Services';
import Works from './pages/Works';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Hero />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'Works',
        element: <Works />
      },
      {
        path: 'services',
        element: <Services />
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
