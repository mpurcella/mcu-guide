import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Marvel Cinematic Universe Guide | Home</title>
            </Helmet>
            <Hero />;
        </>
    );
};

export default Home;
