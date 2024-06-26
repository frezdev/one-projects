import { useEffect, useState } from 'react'
import { Posts } from '@/api/api'
import { Post } from '@/api/types';
import { Link, useParams } from 'react-router-dom';
import '@/assets/css/componentes/card.css'

const ListPosts = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const { category, subcategory } = useParams();

  useEffect(() => {
    Posts.getAll({ category, subcategory })
      .then(([error, data]) => {
        if (!error && data) {
          setPosts(data);
        }
      })
  }, [category, subcategory])

  return (
    <section className='posts container'>
      {
        posts.map(({ id, metadescription, title, category }) => (
          <Link key={id} to={`/posts/${id}`}>
            <article className={`post__card post-card--${category}`}>
              <h3 className='post-card__title'>
                {title}
              </h3>
              <p className='post-card__meta'>{metadescription}</p>
            </article>
          </Link>
        ))
      }
    </section>
  )
}

export default ListPosts