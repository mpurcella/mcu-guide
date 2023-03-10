import React from 'react';

type WrapperProps = {
    width: 'wide' | 'narrow' | 'none';
    children: React.ReactNode;
};

const Wrapper = ({ width, children }: WrapperProps) => {
    if (width === 'wide') {
        return <div className="m-auto max-w-screen-xl px-40 py-60">{children}</div>;
    } else if (width === 'narrow') {
        return <div className="m-auto max-w-screen-lg px-40 py-60">{children}</div>;
    } else if (width === 'none') {
        return <div className="m-auto max-w-none px-40 py-60">{children}</div>;
    } else {
        return null;
    }
};

export default Wrapper;
