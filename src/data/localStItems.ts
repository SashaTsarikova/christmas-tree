type storageObj = {
  sortType: SortOptions,
  filters: string[],
  likedOnes: string[]
}

interface filterInterface<T>{
  count: T,
  year: T,
  shape: T,
  color: T,
  size: T,
  favorite: string,
}


enum SortOptions{
  AZ = "az",
  ZA = "za",
  numberUp = '19',
  numberDown = '91',
}

const enum DataKeys{
  num = 'num',
  name = 'name',
  count = 'count',
  year = 'year',
  shape = 'shape',
  color = 'color',
  size = 'size',
  favorite = 'favorite'
}

const colors:forObjectItem = {
  white: 'белый',
  yellow: 'желтый',
  red: 'красный',
  blue: 'синий',
  green: 'зелёный'
}

const enum ColorsID{
  white = 'white',
  yellow = 'yellow',
  red = 'red',
  blue ='blue',
  green = 'green'
}

type forObjectItem = {
  [id:string] : string
}

const shape: forObjectItem = {
  'ball': 'шар',
  'bell': 'колокольчик',
  'cone': 'шишка',
  'snowflake':'снежинка',
  'figure': 'фигурка'
}

const enum ShapeID{
  ball = 'ball',
  bell = 'bell',
  cone = 'cone',
  snowflake ='snowflake',
  figure = 'figure'
}

const size:forObjectItem = {
  small: 'малый',
  medium: 'средний',
  big: 'большой'
}

const enum SizeID{
  small = 'small',
  medium = 'medium',
  big = 'big'
}

export {colors,ColorsID, DataKeys, filterInterface, shape, ShapeID, size, SizeID, SortOptions, storageObj};
