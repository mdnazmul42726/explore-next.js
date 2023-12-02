import Image from 'next/image';
import React from 'react';

const ImagesAlbum = () => {
    return (
        <div>
            <Image src={'https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format'} alt='next.js logo' width={500} height={500} />
        </div>
    );
};

export default ImagesAlbum;