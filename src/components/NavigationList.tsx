import classNames from 'classnames';
import NavigationLink from './NavigationLink';

type NavigationListProps = {
    isNavOpen: boolean;
    closeNav: () => void;
};

const NavigationList = ({ isNavOpen, closeNav }: NavigationListProps) => {
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
                        <NavigationLink url={navigationLink.url} label={navigationLink.label} onClick={closeNav} />
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationList;
