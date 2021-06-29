import Article from "./Article"
import blogData from "../data/blog";

let posts = blogData.posts

let articleElements = posts.map((post) => {
    return <Article key={post.id}
    title={post.title}
    date={post.date}
    preview={post.preview}
  />
})

function ArticleList(props) {
    
    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList



 