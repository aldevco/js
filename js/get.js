const URL = 'localhost:3000/posts';

async function getPosts(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json(); 
}