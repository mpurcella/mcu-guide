import HighlightedWord from './HighlightedWord';

type ErrorTextProps = {
    tag: React.ReactNode;
    children: string;
};

const ErrorText = ({ tag, children }: ErrorTextProps) => {
    return (
        <h1 className="text-center text-24 font-bold uppercase leading-tight text-grey-100 md:text-40">
            <HighlightedWord tag={tag} />
            {children}
        </h1>
    );
};

export default ErrorText;
