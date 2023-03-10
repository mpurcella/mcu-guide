import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
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
        <div>
            <ScrollToTop />
            <SkipToContent />
            <Header />
            <main id="main" className="min-h-[calc(100vh-64px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
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
