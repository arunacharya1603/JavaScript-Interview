// Simulating asynchronous operations using setTimeout
function getUser(userId, callback) {
    setTimeout(() => {
        console.log('Fetching user data...');
        callback({ userId: userId, username: 'JohnDoe' });
    }, 1000);
}

function getUserPosts(username, callback) {
    setTimeout(() => {
        console.log(`Fetching posts for ${username}...`);
        callback(['Post1', 'Post2', 'Post3']);
    }, 1000);
}

function getPostDetails(post, callback) {
    setTimeout(() => {
        console.log(`Fetching details for ${post}...`);
        callback({ title: post, content: 'This is the content of the post.' });
    }, 1000);
}

// Calling the functions in a nested manner (callback hell)
getUser(1, (user) => {
    console.log('User fetched:', user);

    getUserPosts(user.username, (posts) => {
        console.log('Posts fetched:', posts);

        getPostDetails(posts[0], (postDetails) => {
            console.log('Post details fetched:', postDetails);

            // Continue nesting more asynchronous calls if needed
        });
    });
});
