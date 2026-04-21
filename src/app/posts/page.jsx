const getPosts =async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const PostsPage = async() => {

    const post = await getPosts()

    return (
        <div>
            <h2 className='text-lg font-bold text-gray-500'>Posts are coming soon...</h2> <br />
            <p className="font-semibold ">Total posts: {post.length}</p>
        </div>
    );
};

export default PostsPage;