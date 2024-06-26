/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userData = new Promise((resolve, reject) => {
    const error = true;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Teja',
            age: 19,
            email: 'tejasri@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
