function fetchUserWithPosts(userId) {
  return new Promise((resolve, reject) => {
    if (userId <= 0) {
      reject(new Error('Invalid user ID'));
      return;
    }

    const startTime = Date.now();
    let userData = null;
    let postsData = null;

    function getUser() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id: userId, name: 'John Doe', department: 'Engineering' });
        }, 800);
      });
    }

    function getUserPosts() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, title: 'Post 1', likes: 10 },
            { id: 2, title: 'Post 2', likes: 20 },
            { id: 3, title: 'Post 3', likes: 30 }
          ]);
        }, 600);
      });
    }

    Promise.all([getUser(), getUserPosts()])
      .then(([user, posts]) => {
        const loadTime = Date.now() - startTime;
        resolve({
          user: user,
          posts: posts,
          loadTime: loadTime
        });
      })
      .catch(reject);
  });
}
