import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 p-4 m-4 bg-gray-100 space-y-3">
            <div>
                <h1 className="text-2xl font-bold bg-slate-300 p-3 rounded-lg">Reading spent time: {readingTime}</h1>
            </div>
            <h1 className="text-2xl text-center font-bold mb-3">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks : PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired,
}
export default Bookmarks;