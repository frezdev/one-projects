import { useState, useEffect } from 'react'
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'
import { Categories } from '@/api/api'
import ListCategories from '@/components/ListCategories'
import ListPosts from '@/components/ListPosts'
import SubCategory from './SubCategory'
import "@/assets/css/blog.css"

const Category = () => {
  const [subcategories, setSubcategories] = useState<Array<string>>([])
  const { category } = useParams()

  const url = useResolvedPath("").pathname


  useEffect(() => {
    if (!category) return;
    Categories.getById(category)
      .then(([err, categoriesData]) => {
        if (err || !categoriesData) return alert(err);
        setSubcategories(categoriesData[0].subcategories);
      })
  }, [category])


  return (
    <>
      <div className='container'>
        <h2 className='title-page'>Pet Noticias</h2>
      </div>
      <ListCategories />
      <ul className='category-list container flex'>
        {
          subcategories.map(subCategory => (
            <Link to={`${url}/${subCategory}`} key={subCategory}>
              <li className={`category-list__category category-list__category--${category}`}>
                {subCategory}
              </li>
            </Link>
          ))
        }
      </ul>
      <Routes>
        <Route path='/' element={<ListPosts />} />
        <Route path='/:subcategory' element={<SubCategory />} />
      </Routes>
    </>
  )
}

export default Category