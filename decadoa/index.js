function sendRequest(
  method,
  url,
  data = null,
  successCallback,
  errorCallback,
  authToken = null
) {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json', // Adjust this as needed
    },
  };

  // If an authToken is provided, add it to the headers
  if (authToken) {
    requestOptions.headers['Authorization'] = `Bearer ${authToken}`;
  }

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      if (successCallback && typeof successCallback === 'function') {
        successCallback(responseData);
      }
    })
    .catch((error) => {
      if (errorCallback && typeof errorCallback === 'function') {
        errorCallback(error);
      }
    });
}

// Function to set a session token
function setSessionToken(token) {
  sessionStorage.setItem('session_token', token);
}

// Function to get the session token
function getSessionToken() {
  return sessionStorage.getItem('session_token');
}

// Function to update the session token
function updateSessionToken(newToken) {
  sessionStorage.setItem('session_token', newToken);
}

// Function to delete the session token
function deleteSessionToken() {
  sessionStorage.removeItem('session_token');
}

function isUserLoggedIn() {
  const session = getSessionToken();
  if (!session) {
    redirectToPage('login.html');
    return console.log('Please login first');
  }
}

function userIsLoggedIn() {
  const session = getSessionToken();
  if (session) {
    redirectToPage('index.html');
    return console.log('Logged in successfully');
  } else {
    console.log('Please login first');
  }
}

function redirectToPage(page) {
  window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function () {
  // Attach a click event listener to the button
  const logoutButton = document.getElementById('logout');
  const loginButton = document.getElementById('login');

  if (!logoutButton) {
  } else {
    logoutButton.addEventListener('click', () => {
      deleteSessionToken();
      redirectToPage('login.html');
    });
  }

  if (!loginButton) {
  } else {
    loginButton.addEventListener('click', () => {
      setSessionToken(12345);
      redirectToPage('index.html');
    });
  }
});

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
