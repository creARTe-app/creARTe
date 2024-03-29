import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchReportedPosts = (page) => API.get(`/posts/reportedPosts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const deleteComment = (value, id) => API.put(`/posts/${id}/deleteComment`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const reportPost = (id) => API.put(`/posts/${id}`);
export const postGreenStatus = (id) => API.put(`/posts/postsList/${id}`);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchUsers = () => API.get(`/user/adminPage`);
export const deleteUser = (id) => API.delete(`/user/adminPage/${id}`);
export const savePost = (post, user) => API.put(`/user/savePost` , {post, user});
export const getSavedPosts = (id) => API.get(`/user/getSavedPosts/${id}`)
