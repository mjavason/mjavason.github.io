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

document.addEventListener('DOMContentLoaded', function () {
  const logoutButton = document.getElementById('logout');
  // const loginButton = document.getElementById('login');
  const loginForm = document.getElementById('login-form');

  if (!logoutButton) {
  } else {
    logoutButton.addEventListener('click', () => {
      logout();
    });
  }

  // if (!loginButton) {
  // } else {
  //   loginButton.addEventListener('click', () => {
  //     login();
  //   });
  // }

  if (!loginForm) {
    console.log('login form not found');
  } else {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      const requiredFields = ['username', 'password'];
      checkAndCallFunction(requiredFields, login('username', 'password'));
    });
  }
});

function sendRequest(
  method,
  url,
  data = null,
  successCallback,
  errorCallback,
  authToken = null,
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
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(responseData => {
      if (successCallback && typeof successCallback === 'function') {
        successCallback(responseData);
      }
    })
    .catch(error => {
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

function showAlert(
  icon,
  title,
  message,
  confirmButtonText,
  cancelButtonText,
  callback,
) {
  Swal.fire({
    icon: icon,
    title: title,
    text: message,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    showCancelButton: true, // Show the Cancel button
    allowOutsideClick: () => Swal.getPopup().isOutsideClickAllowed(), // Enable outside click
  }).then(result => {
    if (result.isConfirmed) {
      if (callback) {
        callback();
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Handle Cancel button click here, or leave it empty
    }
  });
}

function showSuccessAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'Operation completed successfully!',
    confirmButtonText: 'OK',
    allowOutsideClick: true,
  }).then(() => {
    // Handle OK button click here, or leave it empty
  });
}

function showErrorAlert() {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'An error occurred!',
    confirmButtonText: 'OK',
    allowOutsideClick: true,
  }).then(() => {
    // Handle OK button click here, or leave it empty
  });
}

function loginOriginal(email, password) {
  showLoading();
  setSessionToken(12345);
  Swal.fire({
    icon: 'success',
    title: 'Login Successful',
    text: 'You have successfully logged in!',
    confirmButtonText: 'OK',
    allowOutsideClick: true, // Allow clicking outside the modal
  }).then(() => {
    hideLoading();
    redirectToPage('index.html');
  });
}

function login(email, password) {
  showLoading();
  setSessionToken(12345);

  // Use setTimeout to delay the redirection
  setTimeout(() => {
    hideLoading();
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Login Successful',
    //   text: 'You have successfully logged in!',
    //   confirmButtonText: 'OK',
    //   allowOutsideClick: true, // Allow clicking outside the modal
    // }).then(() => {
    // });
    redirectToPage('index.html');
  }, 5000); // 5000 milliseconds = 5 seconds
}

function register(email, password, confirmPassword) {
  setSessionToken(12345);
  Swal.fire({
    icon: 'success',
    title: 'Registration Successful',
    text: 'You have successfully registered!',
    confirmButtonText: 'OK',
    allowOutsideClick: true,
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
  }).then(result => {
    if (result.isConfirmed) {
      showLoading();
      setTimeout(() => {
        // User clicked "Yes, Logout," perform the logout action
        deleteSessionToken();
        hideLoading();
        redirectToPage('login.html');
      }, 1500); // 5000 milliseconds = 5 seconds
    }
    // If the user clicked "Cancel," no action is taken
  });
}

function checkAndCallFunction(requiredFields, callback) {
  // Check if all required fields are filled
  const areAllFilled = requiredFields.every(fieldId => {
    const field = document.getElementById(fieldId);
    return field && field.value.trim() !== '';
  });

  if (areAllFilled) {
    // Call the provided callback function when all required fields are filled
    if (typeof callback === 'function') {
      callback();
    }
  } else {
    // Display a SweetAlert with an error message
    Swal.fire({
      icon: 'error',
      title: 'Missing Form Items',
      text: 'Please fill out all required fields.',
    });
  }
}

// Function to show the loading indicator
function showLoading() {
  const loadingContainer = document.getElementById('loading-container');

  if (!loadingContainer) {
    console.log('loading container not found');
  } else {
    loadingContainer.style.display = 'block';
  }
}

// Function to hide the loading indicator
function hideLoading() {
  const loadingContainer = document.getElementById('loading-container');

  if (!loadingContainer) {
    console.log('loading container not found');
  } else {
    loadingContainer.style.display = 'none';
  }
}
