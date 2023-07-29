
function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       
        console.log(`Post created: ${post}`);
        resolve(post);
      }, 1000);
    });
  }
  

  function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const currentTime = new Date().toISOString();
        console.log(`User ${userId}'s lastActivityTime updated: ${currentTime}`);
        resolve(currentTime);
      }, 1000);
    });
  }
  
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        console.log('Last post deleted successfully.');
        resolve();
      }, 1000);
    });
  }
  
  
  function processUserActivity(userId, posts) {
   
    const createPostPromise = createPost('New post content');
    const updateActivityPromise = updateLastUserActivityTime(userId);
  
  
    Promise.all([createPostPromise, updateActivityPromise])
      .then(([createdPost, lastActivityTime]) => {
      
        console.log('All posts:', posts);
        console.log('LastActivityTime:', lastActivityTime);
  
        deleteLastPost()
          .then(() => {
            const newSetOfPosts = posts.filter((post) => post !== createdPost);
            console.log('New set of posts:', newSetOfPosts);
          })
          .catch((error) => {
            console.error('Error deleting the last post:', error);
          });
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  }
  
 
  const userId = 1;
  const posts = ['Post 1', 'Post 2', 'Post 3'];
  
  processUserActivity(userId, posts);
  