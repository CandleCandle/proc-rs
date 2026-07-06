

pub trait Dehydrate<T> {
    fn dehydrate(&self) -> T;
}

pub trait Rehydrate<D, T, E> {
    #[allow(async_fn_in_trait)]
    async fn rehydrate(&self, data: D) -> Result<T, E>;
}

