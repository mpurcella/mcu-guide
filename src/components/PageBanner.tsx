type PageBannerProps = {
    label: string;
    text: string;
};

const PageBanner = ({ label, text }: PageBannerProps) => {
    return (
        <div className="flex h-[30vh] items-center justify-center bg-black-100 shadow-lg shadow-black-100/50">
            <div className="h-full w-full bg-banner bg-cover bg-center bg-no-repeat opacity-25"></div>
            <div className="absolute flex max-w-screen-sm flex-col gap-20 p-20">
                <h1 className="text-center text-24 font-bold uppercase leading-tight text-white text-shadow md:text-40">
                    {label}
                </h1>
                <p className="hidden text-center text-18 font-light leading-tight text-white md:block">{text}</p>
            </div>
        </div>
    );
};

export default PageBanner;
