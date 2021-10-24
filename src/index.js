import React from "react";
import ReactDom from "react-dom";

//css
import "./index.scss";
import { data } from "./books";

const BookList = () => {
  console.log("test", data);
  return (
    <section className="booklist">
      {data.map((book, index, key) => {
        const { img, title, author } = book;
        return <Book author={author} title={title} img={img} key={key}></Book>;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  //const { img, title, author} = props;
  const clickHandler = () => {
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Buy
      </button>
      <button type="button" onClick={complexExample(author)}>
        $25.49
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
