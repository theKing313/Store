'use client'
import React, { useState } from 'react';
import { Box } from '@mui/material';

import styles from './index.module.scss';
import { useProductStore } from '@/store/product';


const Search = () => {
    const { searchProducts, filterFavorites, resetFilter } = useProductStore();
    const [query, setQuery] = useState("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
        if (e.target.value.trim() === "") {
            resetFilter(); 
        } else {
            searchProducts(e.target.value);
        }
    };
    return (
        <Box className={styles.list}>
                <div className={styles.filter}>
                    <input
                    
                        type="text"
                        placeholder="Поиск товаров..."
                        value={query}
                        onChange={handleSearch}
                    />
                    <button onClick={filterFavorites}>❤️ Избранное</button>
                    <button onClick={resetFilter}>🔄 Сброс</button>
                </div>
        </Box>
    );
};

export default Search;





