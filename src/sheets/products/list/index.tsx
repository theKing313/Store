'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import styles from './index.module.scss';



import Image from 'next/image';
import Skeleton from '@/shared';
import { IconHeart } from '@/icons/heart';
import { useProductStore } from '@/store/product';
import { Product } from '@/types';

interface Props {
    list: Product[];
    isLoading: boolean;
}

const List = ({ list, isLoading }: Props) => {
    const {   toggleFavorite,  favorites,removeProduct } = useProductStore();
    const content = () =>
        list.map((item,index) => (
            <>
                <Box key={index} className={styles.default}>
                    <Link key={item.id} href={{ pathname: '/products/', query: { id: item.id } }} >
                        <Box className={styles.img}>
                            {item.image.startsWith('https') 
                             &&  
                             <Image src={item.image} fill sizes="300px" alt={item.title} />
                            }
                        </Box>
                    </Link>
                    <Box className={styles.top}>
                    <Typography>{item.price} $</Typography>
                        <button onClick={() => toggleFavorite(item.id)}>
                            <IconHeart  color ={favorites.includes(item.id) ? '#ED5434' : "#DEE0E4"}  />
                        </button>
                        <button onClick={() => removeProduct(item.id)}>🗑️</button>
                    </Box>
                    <Typography className={styles.name}> {item.title}</Typography>
                    <Box className={styles.footer}>
                         <Typography>{item.price} $</Typography>
                    </Box>
                </Box>
            </>
        ));
    const skeletons = () =>
        Array(8)
            .fill(null)
            .map((_, idx) => <Skeleton key={idx} />);
    return (
        <Box component={'ul'} className={styles.root}>
                <>
                {isLoading ?skeletons() : content()}
                {!isLoading && list.length === 0 && (
                    <p className={styles.info}>No products</p>
                )}
            </>
        </Box>
    );
};

export default List;
