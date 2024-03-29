import ErrorText from './ErrorText';

type ErrorScreenProps = {
    tag: React.ReactNode;
    children: string;
};

const ErrorScreen = ({ tag, children }: ErrorScreenProps) => {
    return (
        <section className="h-[calc(100dvh-64px)] bg-black-100 p-20">
            <div className="flex h-full items-center justify-center">
                <div className="max-w-screen-md">
                    <ErrorText tag={tag}>{children}</ErrorText>
                </div>
            </div>
        </section>
    );
};

export default ErrorScreen;
