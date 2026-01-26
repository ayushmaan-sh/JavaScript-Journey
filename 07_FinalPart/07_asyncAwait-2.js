function fectchPostData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("This is a blog about web3.")
        }, 2000)
    })
}

function fetchCommentData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Nice blog buddy!")
        }, 3000)
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data");
        // const blogData = await fectchPostData()
        // const commentData = await fetchCommentData()

        const [blogData, commentData] = await Promise.all([
            fectchPostData(), fetchCommentData()
        ])

        console.log(`Blog : ${blogData}`);
        console.log(`Comments : ${commentData}`);
        console.log("fetched data succesfully!");
        
    } catch (error) {
        console.log("Error fetching blog data...", error);
        
    }
}

getBlogData()
