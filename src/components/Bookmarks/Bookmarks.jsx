import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 p-4 m-4 bg-gray-100">
            <h1 className="text-2xl text-center font-bold mb-3">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks : PropTypes.array.isRequired
}
export default Bookmarks;