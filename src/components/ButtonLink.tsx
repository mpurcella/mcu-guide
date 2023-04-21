type ButtonLinkProps = {
    url: string;
    className: string;
    startIcon: React.ReactNode;
    label: string;
};

const ButtonLink = ({ url, className, startIcon, label }: ButtonLinkProps) => {
    return (
        <a href={url} className={className} target="_blank" rel="noopener noreferrer">
            <span>{startIcon}</span>
            {label}
        </a>
    );
};

export default ButtonLink;
