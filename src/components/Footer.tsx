const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black-300 p-20">
            <p className="text-center text-14 uppercase leading-snug text-grey-400">
                &copy; {year} Marvel Cinematic Universe Guide. All&nbsp;rights&nbsp;reserved.
            </p>
        </footer>
    );
};

export default Footer;
