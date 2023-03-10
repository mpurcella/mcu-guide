import classNames from 'classnames';

type HamburgerButtonprops = {
    isNavOpen: boolean;
    onClick: () => void;
    focusDisabled: boolean;
};

const HamburgerButton = ({ isNavOpen, onClick, focusDisabled }: HamburgerButtonprops) => {
    const isExpanded = focusDisabled ? false : true;

    return (
        <button
            type="button"
            className="flex h-24 w-28 flex-col justify-around  outline-none duration-200 ease-linear focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
            onClick={onClick}
            aria-label={isNavOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isExpanded}
        >
            <span
                className={classNames('linear h-3 w-full rounded bg-white duration-200', {
                    'translate-y-8 -rotate-45': isNavOpen,
                })}
            ></span>
            <span
                className={classNames('linear h-3 w-full rounded bg-white duration-200', {
                    'invisible opacity-0': isNavOpen,
                })}
            ></span>
            <span
                className={classNames('linear h-3 w-full rounded bg-white duration-200', {
                    '-translate-y-8 rotate-45': isNavOpen,
                })}
            ></span>
        </button>
    );
};

export default HamburgerButton;
