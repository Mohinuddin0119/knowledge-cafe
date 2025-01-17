import '../../../src/App.css'
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog
    return (
        <div className='mb-20 mt-10 space-y-3'>
            <img className='w-full mb-4 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div >
                        <p>{author}</p>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p><span>{reading_time}</span> min read</p>
                    <button className=' hover:text-red-500' onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='blog-title'>{title}</h2>
            <p className=''>
                {
                    hashtags.map((hash,idx) => <span className='mr-4' key={idx}>{hash}</span>)
                }
            </p>
            <button 
                onClick={() => handleMarkAsRead(reading_time)}
             className='text-purple-800 underline text-xl'>Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,
}
export default Blog;