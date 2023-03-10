import { NavLink } from 'react-router-dom';

type NavigationLinkProps = {
    url: string;
    label: string;
    onClick: () => void;
};

const NavigationLink = ({ url, label, onClick }: NavigationLinkProps) => {
    return (
        <NavLink
            to={url}
            className={({ isActive }) => (isActive ? 'navlink-primary-active' : 'navlink-primary')}
            onClick={onClick}
        >
            {label}
        </NavLink>
    );
};

export default NavigationLink;
