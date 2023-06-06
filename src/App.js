import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    const {fetchBooks} = useContext(BooksContext);

    //useEffect with second argument [], makes fetchBooks called one time when the component first rendered on the screen
    //and never called again
    //useEffect with no second arguments, make fetchbooks runs on first render and with each re-render
    //use effect with second argument [counter], maked fetchBooks runs on first render and after re-render just
    //if counter value is changed
    useEffect(()=>{
         fetchBooks();
         
    //second argument causes the Stale variable bug and to solve this we wrap the fetchBooks in the books.js with useCallback
    },[fetchBooks]);

    return (
    <div className="app"> 
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
    );
}

export default App;