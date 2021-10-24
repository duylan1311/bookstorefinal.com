export const data = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51la5695S7L._AC_SX368_.jpg",
    title: "Dear Santa: A Novel",
    author: "Debbie Macomber",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ma1IByQJS._AC_SX368_.jpg",
    title: "Fizban's Treasury of Dragons",
    author: "Wizards RPG Team",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41720Sh-chL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Love Hypothesis ",
    author: "Ali Hazelwood",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/61+Ei-QdGLL._AC_UL320_SR320,320_.jpg",
    title: "The Love Hypothesis ",
    author: "Ali Hazelwood",
  },
  {
    img: "https://m.media-amazon.com/images/I/51bF0nmBXyL.jpg",
    title: "The Bad Seed",
    author: "Jory John",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
];
const names = ["john", "peter", "susan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
