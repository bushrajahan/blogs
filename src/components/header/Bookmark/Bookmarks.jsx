
import propTypes from 'prop-types';
import Book from '../../book/Book';
const Bookmarks = ({bookmarks,time}) => {
  console.log(bookmarks,time)
  return (
    <div className='bg-slate-100 p-4 w-34'>
      <h2>bookmark:{bookmarks.length}</h2>
      <h2>time:{time}</h2>
      {
        bookmarks.map((book,idx)=>
          <Book key={idx} bookmark={book}></Book>
          
          )
      }
    </div>
  );
};

Bookmarks.propTypes = {
 props : propTypes.array
};

export default Bookmarks;