import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-book-context";

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useBookContext();

    const handleDeleteClick= ()=> {
        deleteBookById(book.id);
    };

    const handleEditClick= ()=> {
         //toggle the value of showEdit
         setShowEdit(!showEdit);
    };

    const handleSubmit = ()=>{
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;

    if (showEdit) //instead of showing book title we meed tp display the BookEdit component
    {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    }
    return (
        <div className="book-show">
            <img alt="book" src={`https://picsum.photos/seed/${book.id}/50/40`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;