type ButtonLinkPrimaryProps = {
    url: string;
    className: string;
    startIcon?: React.ReactNode;
    label: string;
};

const ButtonLinkPrimary = ({ url, className, startIcon, label }: ButtonLinkPrimaryProps) => {
    return (
        <a href={url} className={className} target="_blank" rel="noopener noreferrer">
            {startIcon && <span>{startIcon}</span>}
            {label}
        </a>
    );
};

export default ButtonLinkPrimary;
