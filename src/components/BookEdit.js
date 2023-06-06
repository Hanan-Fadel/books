import { useState } from "react";
import useBookContext from "../hooks/use-book-context";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const {editBookById} = useBookContext();

    const handlChange=(event)=> {
     setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit();
      editBookById(book.id, title);
    };


    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handlChange}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;