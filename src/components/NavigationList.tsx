import classNames from 'classnames';
import NavigationLink from './NavigationLink';

type NavigationListProps = {
    isNavOpen: boolean;
    closeNav: () => void;
    focusDisabled?: boolean;
    handleFocusDisabled?: () => void;
};

const NavigationList = ({ isNavOpen, closeNav, focusDisabled, handleFocusDisabled }: NavigationListProps) => {
    const navigationLinks = [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'Movies',
            url: '/movies',
        },
        {
            label: 'TV Shows',
            url: '/tvshows',
        },
    ];

    if (handleFocusDisabled) {
        return (
            <ul
                className={classNames(
                    'fixed top-64 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center gap-32 bg-black-200 navlist-transition lg:static lg:h-auto lg:w-auto lg:flex-row lg:gap-40 lg:bg-transparent lg:opacity-100',
                    {
                        'left-0': isNavOpen,
                        '-left-full': !isNavOpen,
                    },
                )}
            >
                {navigationLinks.map((navigationLink) => {
                    return (
                        <li key={navigationLink.label}>
                            <NavigationLink
                                url={navigationLink.url}
                                label={navigationLink.label}
                                onClick={() => {
                                    closeNav();
                                    handleFocusDisabled();
                                }}
                                focusDisabled={focusDisabled}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return (
            <ul
                className={classNames(
                    'fixed top-64 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center gap-32 bg-black-200 navlist-transition lg:static lg:h-auto lg:w-auto lg:flex-row lg:gap-40 lg:bg-transparent lg:opacity-100',
                    {
                        'left-0': isNavOpen,
                        '-left-full': !isNavOpen,
                    },
                )}
            >
                {navigationLinks.map((navigationLink) => {
                    return (
                        <li key={navigationLink.label}>
                            <NavigationLink
                                url={navigationLink.url}
                                label={navigationLink.label}
                                onClick={closeNav}
                                focusDisabled={focusDisabled}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
};

export default NavigationList;
