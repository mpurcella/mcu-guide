import { Helmet } from 'react-helmet-async';
import ErrorScreen from '../components/ErrorScreen';

const PageNotFound = () => {
    return (
        <>
            <Helmet>
                <title>Marvel Cinematic Universe Guide | 404 - Page Not Found</title>
            </Helmet>
            <ErrorScreen tag="404"> - Page not Found.</ErrorScreen>
        </>
    );
};

export default PageNotFound;
