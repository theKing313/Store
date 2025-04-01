import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import styles from './index.module.scss';
import { useProductStore } from '@/store/product';
import Image from 'next/image';
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

const Product = ({ id }: { id: string }) => {
    const { product, getProduct } = useProductStore();
    const router = useRouter();

    useEffect(() => {
        if (!id) return;
        console.log('Fetching product with id:', id);
        getProduct(id);
    }, [id]);  
    console.log(product)
    if (!product) {
        return <Typography>Загрузка...</Typography>;  
    }
    return (
        
        <Box className={styles.root}>
            <Box className={styles.wrapper}>
                        <Box className={styles.block}>
                    <Box className={styles.img}>
                        {product.image && product.image.startsWith('https') && (
                            <Image src={product.image} fill sizes="300px" alt={product.title} />
                        )}
                    </Box>
                    <Typography className={styles.name}>{product?.title}</Typography>
                    <Typography className={styles.name}>{product?.description}</Typography>
                    <Typography className={styles.name}>Отзывы: {product?.rating?.count}</Typography>
                    <Typography className={styles.name}>Рейтинг: {product?.rating?.rate}</Typography>
                    <Box className={styles.footer}>
                         <Typography>{product?.price} $</Typography>
                    </Box>
                    <Button
                        variant="contained" 
                        color="primary" 
                        className={styles.backButton} 
                        onClick={() => router.push('/products')}
                    >
                        Назад к списку
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Product;
