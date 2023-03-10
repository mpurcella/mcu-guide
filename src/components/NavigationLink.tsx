import { NavLink } from 'react-router-dom';

type NavigationLinkProps = {
    url: string;
    label: string;
    onClick: () => void;
    focusDisabled?: boolean;
};

const NavigationLink = ({ url, label, onClick, focusDisabled }: NavigationLinkProps) => {
    return (
        <NavLink
            to={url}
            className={({ isActive }) => (isActive ? 'navlink-primary-active' : 'navlink-primary')}
            onClick={onClick}
            tabIndex={focusDisabled ? -1 : 0}
        >
            {label}
        </NavLink>
    );
};

export default NavigationLink;
