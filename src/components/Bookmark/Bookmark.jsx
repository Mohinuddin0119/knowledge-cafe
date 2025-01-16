import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-300 p-2 rounded-lg mb-2'>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
};

export default Bookmark;

// module 42_6 end