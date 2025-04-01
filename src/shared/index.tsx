'use client';

import { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <ContentLoader speed={2} width={'100%'} height={345} viewBox="0 0 100% 345" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
            <rect x="0" y="252" rx="5" ry="5" width="100%" height="23" />
            <rect x="0" y="280" rx="5" ry="5" width="100%" height="20" />
            <rect x="0" y="306" rx="5" ry="5" width="190" height="16" />
            <rect x="0" y="0" rx="12" ry="12" width="100%" height="240" />
            <rect x="0" y="326" rx="5" ry="5" width="190" height="16" />
        </ContentLoader>
    );
};

export default Skeleton;
