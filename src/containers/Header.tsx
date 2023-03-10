import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FocusLock from 'react-focus-lock';
import HamburgerButton from '../components/HamburgerButton';
import NavigationList from '../components/NavigationList';
import MarvelLogo from '../images/marvel-logo.png';

const useMediaQuery = (mediaQuery: string) => {
    const [mql] = useState(() => window.matchMedia(mediaQuery));
    const [matches, setMatches] = useState(mql.matches);

    useEffect(() => {
        const screenResize = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        mql.addEventListener('change', screenResize);

        return () => {
            mql.removeEventListener('change', screenResize);
        };
    }, [mql]);

    return matches;
};

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(() => false);
    const isScreenWide = useMediaQuery('(min-width: 1024px)');
    const [focusDisabled, setFocusDisabled] = useState(true);

    const handleIsNavOpen = () => {
        setIsNavOpen((currentIsNavOpen) => !currentIsNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const handleFocusDisabled = () => {
        setFocusDisabled(!focusDisabled);
    };

    useEffect(() => {
        if (isScreenWide) {
            setIsNavOpen(false);
        }
    });

    // Disable scroll when mobile navigation list is open
    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isNavOpen]);

    return (
        <header className="relative z-40 flex h-64 items-center bg-black-300 px-20 py-12 md:px-40">
            <nav className="flex h-full w-full items-center justify-between">
                <Link
                    to="/"
                    className="h-full outline-none duration-200 ease-linear focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
                    onClick={closeNav}
                >
                    <img src={MarvelLogo} alt="Marvel Logo" className="h-full w-100 md:w-120" />
                </Link>
                {isScreenWide ? (
                    <NavigationList isNavOpen={isNavOpen} closeNav={closeNav} />
                ) : (
                    <FocusLock disabled={focusDisabled} returnFocus={true}>
                        <HamburgerButton
                            isNavOpen={isNavOpen}
                            onClick={() => {
                                handleIsNavOpen();
                                handleFocusDisabled();
                            }}
                            focusDisabled={focusDisabled}
                        />
                        <NavigationList
                            isNavOpen={isNavOpen}
                            closeNav={closeNav}
                            focusDisabled={focusDisabled}
                            handleFocusDisabled={handleFocusDisabled}
                        />
                    </FocusLock>
                )}
            </nav>
        </header>
    );
};

export default Header;