import { NewsItem } from '../NewsItem';

export const NewsList = ({ news, newsByCategory }) => {
  return newsByCategory.title ? (
    <NewsItem
      id={newsByCategory.id}
      title={newsByCategory.title}
      likes={newsByCategory.likes}
      image={newsByCategory.image}
      short_description={newsByCategory.short_description}
      date={newsByCategory.date}
    />
  ) : (
    <div className='news-container'>
      {news.length !== 0 &&
        news.map(({ id, title, likes, short_description, image, date }) => (
          <NewsItem
            key={id}
            id={id}
            title={title}
            likes={likes}
            image={image}
            short_description={short_description}
            date={date}
          />
        ))}
    </div>
  );
};
