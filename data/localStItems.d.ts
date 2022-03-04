declare type storageObj = {
    sortType: SortOptions;
    filters: string[];
    likedOnes: string[];
};
interface filterInterface<T> {
    count: T;
    year: T;
    shape: T;
    color: T;
    size: T;
    favorite: string;
}
declare enum SortOptions {
    AZ = "az",
    ZA = "za",
    numberUp = "19",
    numberDown = "91"
}
declare const enum DataKeys {
    num = "num",
    name = "name",
    count = "count",
    year = "year",
    shape = "shape",
    color = "color",
    size = "size",
    favorite = "favorite"
}
declare const colors: forObjectItem;
declare const enum ColorsID {
    white = "white",
    yellow = "yellow",
    red = "red",
    blue = "blue",
    green = "green"
}
declare type forObjectItem = {
    [id: string]: string;
};
declare const shape: forObjectItem;
declare const enum ShapeID {
    ball = "ball",
    bell = "bell",
    cone = "cone",
    snowflake = "snowflake",
    figure = "figure"
}
declare const size: forObjectItem;
declare const enum SizeID {
    small = "small",
    medium = "medium",
    big = "big"
}
export { colors, ColorsID, DataKeys, filterInterface, shape, ShapeID, size, SizeID, SortOptions, storageObj };
