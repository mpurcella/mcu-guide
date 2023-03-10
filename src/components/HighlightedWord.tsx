type HighlightedWordProps = {
    tag: React.ReactNode;
};

const HighlightedWord = ({ tag }: HighlightedWordProps) => {
    return <span className="bg-red px-8 text-white">{tag}</span>;
};

export default HighlightedWord;
