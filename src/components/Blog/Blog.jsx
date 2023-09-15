
import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';

const Blog = ({blog,props,handleAddBookMarks,handleReadingTime}) => {
  // console.log(props)
  
        const {cover,hashtags,posted_date,title,author,author_img,reading_time} = props;
  return (
    <div>
       <img className='mx-w-full mb-4' src={cover} alt={`cover picture of title ${title}`}/>
        <div className="flex justify-between">
           <div className='ml-6'>
            <img className='w-14' src={author_img} alt="" />
            <p>{author}</p>
            <p>{posted_date}</p>
           </div>
           <div className='mb-4'>
            <span>{reading_time}minitues</span>
           <button onClick={()=>handleAddBookMarks(blog)}><FaBookmark className='ml-4 text-red-100'></FaBookmark></button>
           </div>
        </div>
       
       <h2 className='text-4xl text-bold mx-4 '>How to get your first job as a self-taught programmer</h2>
      <p className='mx-4 mt-2'>
      {
          hashtags.map((hash,id)=>
            <span key={id}>#{hash}</span>
          )
        } 
      </p>
      <button className='ml-6 underline text-purple  ' onClick={()=>handleReadingTime(reading_time)}>Reading Time</button>
    </div>
  );
};
Blog.propTypes = {
  props:PropTypes.object.isRequired,
  handleAddBookMarks:PropTypes.func.isRequired
}
export default Blog;