import { createContext, useState, useCallback } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}) {
   
    const [books, setBooks] = useState([]);

    //to fix the Stale variable bug that occurs anytime useEffect contains a function that refers to a variable.
	//You will get this warning “React Hook useEffect has a missing dependency” ‘XXX’ 
    const fetchBooks = useCallback(async ()=> {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    },[]);


   
    const editBookById= async (id, newTitle)=> {
        const updatedBook = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle});

        const updatedBooks = books.map((book)=> {
            if (book.id === id) {
               return {...book, ...updatedBook.data} //take all the properties of that object
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    
    const deleteBookById = async (id)=> {
       await axios.delete(`http://localhost:3001/books/${id}`);

       const updatedBooks = books.filter((book)=>{
         return book.id !== id;
       });

       setBooks(updatedBooks);
    };

    const createBook= async (title) => {

        const response = await axios.post('http://localhost:3001/books', {title}
        )

        console.log(response)
        //add one book to books DONOT use push because REACT will not re-render the component
        const updatedBooks = [ //create a new array
            ...books, //take a copy of the books array
            response.data
            // {id: Math.floor(Math.random()*9999), //create random id ),
            //  title,
            // }, //add a new book object to the end of the array
        ];

        setBooks(updatedBooks); 
    };

    const valueToShare = {
        books,
        editBookById,
        deleteBookById,
        createBook,
        fetchBooks
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider};

export default BooksContext;