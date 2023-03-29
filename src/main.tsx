import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import TvShows from './pages/TvShows';
import TvShow from './pages/TvShow';
import PageNotFound from './pages/PageNotFound';
import Header from './containers/Header';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const App = () => {
    return (
        <HelmetProvider>
            <ScrollToTop />
            <SkipToContent />
            <Header />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </HelmetProvider>
    );
};

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/movies',
                element: <Movies />,
            },
            {
                path: '/movies/:id',
                element: <Movie />,
            },
            {
                path: '/tvshows',
                element: <TvShows />,
            },
            {
                path: '/tvshows/:id',
                element: <TvShow />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
