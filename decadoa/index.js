const CONSTANTS = {
  MESSAGES: {
    FETCHED: 'Resource retrieved successfully',
    UPDATED: 'Resource updated successfully',
    ERROR: 'Oops! An error occurred while processing the resource',
    CREATED: 'Resource created successfully',
    DELETED: 'Resource deleted successfully',
    SUCCESSFUL: 'Successful',
    ASSIGNED: 'Resource assignment completed successfully',
    NOT_FOUND: 'Sorry, the requested resource was not found',
    DEFAULT: "We've received your request and are processing it",
    ALREADY_EXISTS: 'This resource already exists',
    USER_ALREADY_EXISTS: 'The user already exists',
    AUTH_DEFAULT: 'Authentication is required for this action',
    LOGOUT: "You've been successfully logged out. Have a wonderful day!",
    LOGIN_FIRST: 'Oops! Please log in first to proceed',
    LOGGED_IN: "You've been successfully logged in",
    LOGIN_FAILURE: 'Login failed. Please check your username and password',
    USER_UNAUTHORIZED:
      'Sorry, you are not authorized to perform this operation',
    USER_NOT_FOUND: 'User not found',
    MAIL_SENT: 'Email sent successfully. Please check your inbox!',
    INVALID_UNIQUE_ID: 'Invalid unique identifier provided',
    UNKNOWN_ERROR: 'Oops! An unknown error occurred',
    AUTH_FAILURE: 'Authentication failed. Please check your credentials',
    FORBIDDEN: "Sorry, you don't have permission to access this resource",
    AUTHENTICATION_FAILURE: 'Authentication failed. Please log in again',
    NOT_AUTHENTICATED: 'Oops! You need to be authenticated for this action',
    BAD_PARAMETERS: 'Oops! Invalid parameters were provided',
    INTERNAL_ERROR: 'An internal error occurred. Our team is addressing it!',
    SUCCESS_MSG_RESPONSE: 'Success! The operation was completed successfully',
    FAILURE_MSG_RESPONSE: 'Oops! The operation failed to complete',
    ACCESS_TOKEN_ERROR_RESPONSE: 'Access token is invalid. Please log in again',
    TOKEN_REFRESH_RESPONSE:
      'Success! The access token was refreshed successfully',
    ROUTE_NOT_FOUND: "Sorry, the page you're looking for doesn't exist.",
  },

  TITLES: {},
};

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

function showAlert(title = null, message = null, type = null) {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool',
  });
}

function redirectToPage(page) {
  window.location.href = page;
}

function login() {
  setSessionToken(12345);
  Swal.fire({
    icon: 'success',
    title: 'Login Successful',
    text: 'You have successfully logged in!',
    confirmButtonText: 'OK',
    allowOutsideClick: true, // Allow clicking outside the modal
  }).then(() => {
    redirectToPage('index.html');
  });
}

function logout() {
  Swal.fire({
    icon: 'warning',
    title: 'Logout Confirmation',
    text: 'Are you sure you want to log out?',
    showCancelButton: true,
    confirmButtonText: 'Yes, Logout',
    cancelButtonText: 'Cancel',
    allowOutsideClick: true, // Allow clicking outside the modal
  }).then((result) => {
    if (result.isConfirmed) {
      // User clicked "Yes, Logout," perform the logout action
      deleteSessionToken();
      redirectToPage('login.html');
    }
    // If the user clicked "Cancel," no action is taken
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Attach a click event listener to the button
  const logoutButton = document.getElementById('logout');
  const loginButton = document.getElementById('login');

  if (!logoutButton) {
  } else {
    logoutButton.addEventListener('click', () => {
      logout();
    });
  }

  if (!loginButton) {
  } else {
    loginButton.addEventListener('click', () => {
      login();
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
