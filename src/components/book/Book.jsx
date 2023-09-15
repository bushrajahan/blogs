import React from 'react';
import PropTypes from 'prop-types';

const Book = ({bookmark}) => {
  const {title} = bookmark;
  console.log(bookmark.length)
  return (
    <div className='p-2 bg-slate-50 border-r-4 m-4'>
      <p>{bookmark.length}</p>
       <h3>{title}</h3>
    </div>
  );
};

Book.propTypes = {
  
};

export default Book;