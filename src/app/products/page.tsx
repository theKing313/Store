'use client';

import { Box, Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';


import styles from './index.module.scss';
import Products from '@/sheets/products';
import Product from './product';

const Page = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();

    if (id) return <Product id={id} />;

    const handleChange = () => {
        router.push('/form');
    };

    return (
        <Box className={styles.wrapper}>
        
            <Button className={styles.button} variant="contained" color="primary" onClick={handleChange}>
                Добавить продукт
            </Button>
            <Products />
        </Box>
    );
};

export default Page;
