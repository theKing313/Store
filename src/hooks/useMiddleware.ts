import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default () => {
    const pathname = usePathname();
    const router = useRouter();
   
    useLayoutEffect(() => {
        if (pathname === '/') {
            router.replace('/products');
        }
    }, [pathname]);
};
