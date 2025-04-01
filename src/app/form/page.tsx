"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; 
import { useProductStore } from "@/store/product";
import styles from "./index.module.scss";
import { Product } from "@/types";

const Page = () => {
  const { register, handleSubmit, reset } = useForm<Product>();
  const { addProduct } = useProductStore();
  const router = useRouter();

  const onSubmit = (data: Product) => {
    addProduct({
      id: Date.now(),
      title: data.title,
      image: data.image,
      isFavorite: false,
      description: data.description, 
      rating: {
        count: Number(data.rating?.count) || 0, 
        rate: Number(data.rating?.rate) || 0, 
      },
      price: Number(data.price) || 0, 
    });

    reset();
    router.push("/products");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("title", { required: true })}
        placeholder="Название"
        className={styles.input}
      />
      <input
        {...register("image", { required: true })}
        placeholder="Ссылка на изображение"
        className={styles.input}
      />
      <textarea
        {...register("description", { required: true })}
        placeholder="Описание"
        className={styles.input}
      />
      <input
        type="number"
        {...register("rating.count", { required: true })}
        placeholder="Количество отзывов"
        className={styles.input}
      />
      <input
        type="number"
        step="0.1"
        {...register("rating.rate", { required: true })}
        placeholder="Рейтинг"
        className={styles.input}
      />
      <input
        type="number"
        step="0.01"
        {...register("price", { required: true })}
        placeholder="Цена"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Создать</button>
    </form>
  );
};

export default Page;
