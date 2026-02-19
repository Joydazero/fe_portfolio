import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/common/Navbar';
import MainPage from './pages/MainPage';
import IntroPage from './pages/IntroPage';
import ProjectsPage from './pages/ProjectsPage';
import GuestbookPage from './pages/GuestbookPage';
import WebPublisherPage from './pages/WebPublisherPage';
import RefPracticePage from './pages/RefPracticePage';
import CodeTestPage from './pages/CodeTestPage';

const queryClient = new QueryClient();

const Layout = () => {
  useEffect(() => {
    console.log('HTML ClassList:', document.documentElement.classList.toString());
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/about', element: <IntroPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/publisher', element: <WebPublisherPage /> },
      { path: '/practice/ref', element: <RefPracticePage /> },
      { path: '/practice/code', element: <CodeTestPage /> },
      { path: '/guestbook', element: <GuestbookPage /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
