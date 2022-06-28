import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <h2 className="text-xl md:text-4xl font-bold text-center">
            {children}
        </h2>
    );
};

export default SectionTitle;