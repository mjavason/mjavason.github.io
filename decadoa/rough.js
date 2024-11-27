
///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Example usage with a Bearer token:
// const authToken = 'your_bearer_token_here'; // Replace with your actual token
// const url = 'https://example.com/api/resource'; // Replace with your API URL

// // Making a GET request with a Bearer token
// sendRequest(
//   'GET',
//   url,
//   null,
//   (data) => {
//     console.log('GET success:', data);
//   },
//   (error) => {
//     console.error('GET error:', error);
//   },
//   authToken
// );

// // Example usage:
// // GET request
// sendRequest(
//   'GET',
//   'https://jsonplaceholder.typicode.com/posts',
//   null,
//   (data) => {
//     console.log('GET success:', data);
//   },
//   (error) => {
//     console.error('GET error:', error);
//   }
// );

// // DELETE request
// sendRequest(
//   'DELETE',
//   'https://jsonplaceholder.typicode.com/posts/1',
//   null,
//   (data) => {
//     console.log('DELETE success:', data);
//   },
//   (error) => {
//     console.error('DELETE error:', error);
//   }
// );

// // PATCH request
// const patchData = {
//   title: 'Updated Post Title',
// };
// sendRequest(
//   'PATCH',
//   'https://jsonplaceholder.typicode.com/posts/1',
//   patchData,
//   (data) => {
//     console.log('PATCH success:', data);
//   },
//   (error) => {
//     console.error('PATCH error:', error);
//   }
// );

// // POST request
// const postData = {
//   title: 'New Post',
//   body: 'This is a new post.',
//   userId: 1,
// };
// sendRequest(
//   'POST',
//   'https://jsonplaceholder.typicode.com/posts',
//   postData,
//   (data) => {
//     console.log('POST success:', data);
//   },
//   (error) => {
//     console.error('POST error:', error);
//   }
// );
