const axios = require('axios');

const BASE_URL = 'https://www.reddit.com';

const fetchPosts = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data.data.children.map((post) => post.data);
  } catch (error) {
    console.error(`Error fetching posts: ${error}`);
    throw new Error(`Failed to fetch posts from ${url}`);
  }
};

const getPosts = async (filter = null) => {
  let url = BASE_URL;

  if (filter) {
    url += `/${filter}`;
  }

  url += '/.json';

  return fetchPosts(url);
};

const getPostsBySubreddit = async (subreddit, filter = null) => {
  let url = `${BASE_URL}/r/${subreddit}`;

  if (filter) {
    url += `/${filter}`;
  }

  url += '.json';

  return fetchPosts(url);
};

module.exports = {
  getPosts,
  getPostsBySubreddit,
};
