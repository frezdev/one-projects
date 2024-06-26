import { useState, useEffect } from 'react'
import { Categories } from '@/api/api';
import { type Category } from '@/api/types';
import "@/assets/css/blog.css"
import { Link } from 'react-router-dom';

const ListCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    Categories.getAll()
      .then(([err, categoriesData]) => {
        if (err) return alert(err);
        if (categoriesData) setCategories(categoriesData);
      })
  }, [])

  return (
    <ul className="category-list container flex">
      {categories.map(({ id, name }) => (
        <Link key={id} to={`/category/${id}`}>
          <li className={`category-list__category category-list__category--${id}`}>
            {name}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default ListCategories