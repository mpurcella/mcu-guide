import React from 'react';

type WrapperProps = {
    width: 'narrow' | 'wide';
    children: React.ReactNode;
};

const Wrapper = ({ width, children }: WrapperProps) => {
    if (width === 'narrow') {
        return <div className="m-auto max-w-screen-lg px-40 py-40">{children}</div>;
    } else if (width === 'wide') {
        return <div className="m-auto max-w-none px-40 py-40">{children}</div>;
    } else {
        return null;
    }
};

export default Wrapper;
