const SkipToContent = () => {
    return (
        <a
            href="#main"
            className="hover:bg-black-300 absolute top-12 left-20 hidden bg-black-100 p-12 uppercase text-white opacity-0 outline-none outline-1 outline-offset-0 outline-white skip-to-content-transition hover:outline-red focus-visible:z-50 focus-visible:opacity-100 lg:block"
        >
            Skip To Content
        </a>
    );
};

export default SkipToContent;
