![npm version](https://img.shields.io/npm/v/reddit-api-wrapper)

![downloads](https://img.shields.io/npm/dw/reddit-api-wrapper)

[NPM Package](https://www.npmjs.com/package/reddit-api-wrapper)

# Reddit API Wrapper

A simple, easy-to-use wrapper for the Reddit API. This Node.js package abstracts the complexities of interacting with Reddit's API, providing a straightforward interface for fetching posts from Reddit.

## Installation

Install via npm:

```bash
npm install reddit-api-wrapper
```

## Usage

Here's how you can use this package:

```javascript
const reddit = require('<your-package-name>');

// Fetch top posts from all of Reddit
reddit
  .getPosts('top')
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error));

// Fetch top posts from a specific subreddit
reddit
  .getPostsBySubreddit('programming', 'top')
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error));
s;
```

## API

This package provides the following functions:

`getPosts(filter)`: Fetches posts from the front page of Reddit. If a filter is provided (e.g., 'top', 'hot', 'best'), fetches posts using that filter.

`getPostsBySubreddit(subreddit, filter)`: Fetches posts from a specific subreddit. If a filter is provided (e.g., 'top', 'hot', 'best'), fetches posts using that filter.
