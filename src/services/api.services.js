import { http } from '../config/axiosInstance';

export const getAllCategories = async () => {
  try {
    const { data } = await http.get('/categories/list');
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllNews = async (page) => {
  try {
    const { data } = await http.get(`/news/${page}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getNewsByCategory = async (categoryId) => {
  try {
    const { data } = await http.get(`/categories/${categoryId}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getStoryById = async (storyId) => {
  try {
    if (!storyId) throw new Error('Story ID is undefined');
    const { data } = await http.get(`/story/${storyId}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
