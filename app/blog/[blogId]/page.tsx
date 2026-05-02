import axios from "axios"
export default async function BlogPosts({params} : {
    params : {
        blogId : string
    }
}) {
    const postId =  (await params).blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data =  response.data;
    return <div>
        blog page {postId}

        <br/>

        title - {data.title}
        body - {data.body}
    </div>
}