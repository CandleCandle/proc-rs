
pub trait EnumId<T> {
    fn name(&self) -> String;
    fn values() -> Vec<T>;
}
