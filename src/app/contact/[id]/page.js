import React from 'react';

const DynamicComponents = ({ params }) => {
    console.log(params);

    return (
        <div>
            <h1>this is dynamic page {params.id}</h1>
            <p></p>

        </div>
    );
};

export default DynamicComponents;