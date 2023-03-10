import ErrorText from './ErrorText';

type ErrorScreenProps = {
    tag: React.ReactNode;
    children: string;
};

const ErrorScreen = ({ tag, children }: ErrorScreenProps) => {
    return (
        <section className="h-[calc(100vh-64px)] p-20">
            <div className="flex h-full items-center justify-center">
                <div className="max-w-screen-md">
                    <ErrorText tag={tag} children={children} />
                </div>
            </div>
        </section>
    );
};

export default ErrorScreen;
