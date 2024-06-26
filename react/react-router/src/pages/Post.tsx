import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Post as PostTypes } from "@/api/types"
import { Posts } from "@/api/api"
import "@/assets/css/componentes/card.css"

const initialPostsState: PostTypes = {
  id: 1,
  title: "",
  body: "",
  category: "",
  metadescription: "",
  subcategory: ""
}
const Post = () => {
  const [post, setPost] = useState<PostTypes>(initialPostsState)
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    if (!id) return;
    Posts.getById(id)
      .then(([error, data]) => {
        if (!error && data) {
          setPost(data);
          return
        }
        navigate("/404")
      })
  }, [id, navigate])


  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  )
}

export default Post