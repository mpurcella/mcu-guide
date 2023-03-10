import Avengers from '../images/avengers.png';

const Hero = () => {
    return (
        <section className="relative h-[calc(100vh-64px)]">
            <div className="flex h-full items-center justify-center">
                <img
                    src={Avengers}
                    alt="Thor, Wolverine, Black Widow, Iron Man, Captain America, The Hulk, Spider Man, and the Human Torch in fighting stances."
                    className="m-auto h-[calc(100dvh-64px)] object-cover opacity-15"
                />
                <div className="absolute max-w-screen-sm p-20">
                    <h1 className="text-center text-24 font-bold uppercase leading-tight text-grey-100 text-shadow md:text-40">
                        The <span className="bg-red px-8 text-black-100 text-shadow-none">Ultimate</span> Guide to the
                        Marvel Cinematic&nbsp;Universe
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
