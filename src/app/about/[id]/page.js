import React from 'react';

const DynamicPage = ({ params }) => {
    console.log(params);

    return (
        <div>
            <p>this is dynamic page {params.id}</p>
        </div>
    );
};

export default DynamicPage;