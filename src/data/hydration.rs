

pub trait Dehydrate<T> {
    fn dehydrate(&self) -> T;
}

pub trait Rehydrate<T, D> {
    fn rehydrate(&self, data: D) -> T;
}





