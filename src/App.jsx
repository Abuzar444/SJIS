import About from './components/About';
import Hero from './components/Hero';
import HomeLayout from './components/HomeLayout';
import Services from './components/Services';
import Works from './components/Works';
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
