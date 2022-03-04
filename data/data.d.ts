interface DataInterface<T> {
    num: T;
    name: T;
    count: T;
    year: T;
    shape: T;
    color: T;
    size: T;
    favorite: boolean;
}
declare const data: DataInterface<string>[];
export default data;
