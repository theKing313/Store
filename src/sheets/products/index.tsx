'use client'
import React, { useEffect } from 'react';
import { Box } from '@mui/material';

import styles from './index.module.scss';
import { useProductStore } from '@/store/product';
import { getProducts } from '@/api';
import { useMutation } from '@tanstack/react-query';
import List from './list';
import Search from '../search';


const Products = () => {
    const { products,setProducts ,resetFilter } = useProductStore();
    const { mutate: getAllProducts, isPending: isLoadingProducts} = useMutation({
        mutationKey: ['products'],
        mutationFn: async (queries: string[] = []) => {
            const response= await getProducts(queries); 
            if (!response) {
                throw new Error();
            }
            return response.data
        },
        onError: () => { },
        onSuccess: (data) => {
            setProducts(data);
        },
    });
    useEffect(()=>{
        if(products.length===0){
            getAllProducts([])
        }else {
            resetFilter();
        }
    },[])

    return (
        <Box className={styles.list}>
            <h1>Список товаров</h1>
            <Search/>
            {products.length > 0 && 
                <List isLoading={isLoadingProducts} list={products}></List>
            }
        </Box>
    );
};

export default Products;





