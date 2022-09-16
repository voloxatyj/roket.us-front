import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import {
  getAllCategories,
  getAllNews,
  getNewsByCategory,
} from './services/api.services';
import { CategoryList } from './components/listComponents/CategoryList';
import { NewsList } from './components/listComponents/NewsList';
import { PaginationButtons } from './components/Pagination';
import './App.css';

export const App = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState({});
  const [newsByCategory, setNewsByCategory] = useState({});
  const [count, setCount] = useState(10);
  const [newPage, setNewPage] = useState(1);
  const limit = 10;

  async function getCategories() {
    const getCategoriesList = await getAllCategories();
    setCategories(getCategoriesList);
  }

  async function getNews(page) {
    const { news, storiesCount } = await getAllNews(page);
    setCount(storiesCount);
    setNews(news);
  }

  async function getNewsByCategoryId(id) {
    const response = await getNewsByCategory(id);
    setNewsByCategory(response);
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (category.id) {
      getNewsByCategoryId(category.id);
    }
    getNews(newPage);
  }, [category]);

  useEffect(() => {
    getNews(newPage);
  }, [newPage]);

  return (
    <>
      <Navbar />
      <div className='container'>
        <CategoryList
          categories={categories}
          setCategory={setCategory}
          setNewsByCategory={setNewsByCategory}
        />
        <NewsList news={news} newsByCategory={newsByCategory} />
      </div>
      <div className='pagination'>
        <PaginationButtons
          count={count}
          page={newPage}
          limit={limit}
          setNewPage={setNewPage}
          newsByCategory={newsByCategory}
        />
      </div>
    </>
  );
};

export default App;
