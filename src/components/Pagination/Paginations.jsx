

const Pagination = ({totalPosts, postsPerPage}) => {
    const pages = [];
    for(let i = 1; i< Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i); 
    }
    return (
        <div>
            
        </div>
    );
};

export default Pagination;