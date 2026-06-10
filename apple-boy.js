/**
 * Apple Boy - Truth Socials Platform
 * Main application entry point
 */

class AppleBoy {
  constructor(config = {}) {
    this.config = config;
    this.users = [];
    this.posts = [];
    this.initialized = false;
  }

  /**
   * Initialize the application
   */
  init() {
    console.log('Initializing Apple Boy...');
    this.initialized = true;
    console.log('Apple Boy initialized successfully!');
  }

  /**
   * Create a new user
   * @param {Object} userData - User information
   */
  createUser(userData) {
    if (!this.initialized) {
      throw new Error('Application not initialized');
    }
    
    const user = {
      id: this.users.length + 1,
      ...userData,
      createdAt: new Date()
    };
    
    this.users.push(user);
    return user;
  }

  /**
   * Create a new post
   * @param {Object} postData - Post information
   */
  createPost(postData) {
    if (!this.initialized) {
      throw new Error('Application not initialized');
    }
    
    const post = {
      id: this.posts.length + 1,
      ...postData,
      createdAt: new Date(),
      likes: 0,
      comments: []
    };
    
    this.posts.push(post);
    return post;
  }

  /**
   * Get all users
   */
  getUsers() {
    return this.users;
  }

  /**
   * Get all posts
   */
  getPosts() {
    return this.posts;
  }
}

// Export the module
module.exports = AppleBoy;

// Example usage
if (require.main === module) {
  const app = new AppleBoy();
  app.init();
  console.log('Apple Boy is ready to use!');
}
