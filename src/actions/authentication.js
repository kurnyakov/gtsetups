import 'whatwg-fetch';

// Action Creators
export const loginAttempt = () => ({ type: 'AUTHENTICATION_LOGIN_ATTEMPT' });
export const loginFailure = error => ({ type: 'AUTHENTICATION_LOGIN_FAILURE', error });
export const loginSuccess = json => ({ type: 'AUTHENTICATION_LOGIN_SUCCESS', json });
export const sessionCheckFailure = () => ({ type: 'AUTHENTICATION_SESSION_CHECK_FAILURE' });
export const sessionCheckSuccess = json => ({ type: 'AUTHENTICATION_SESSION_CHECK_SUCCESS', json });
export const registrationFailure = error => ({ type: 'AUTHENTICATION_REGISTRATION_FAILURE', error });
export const registrationSuccess = () => ({ type: 'AUTHENTICATION_REGISTRATION_SUCCESS' });
export const registrationSuccessViewed = () => ({ type: 'AUTHENTICATION_REGISTRATION_SUCCESS_VIEWED' });
export const logoutSuccess = () => ({ type: 'AUTHENTICATION_LOGOUT_SUCCESS' });
export const logoutFailure = error => ({ type: 'AUTHENTICATION_LOGOUT_FAILURE', error });

// Check user session
export function checkSession() {
  return async (dispatch) => {
    dispatch(loginAttempt());
    // contact the API
    await fetch(
      // where to contact
      '/api/authentication/checksession',
      // what to send
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((json) => {
      if (json.username) {
        return dispatch(sessionCheckSuccess(json));
      }
      return dispatch(sessionCheckFailure());
    })
    .catch(error => dispatch(sessionCheckFailure(error)));
  };
}

// Log User In
export function logUserIn(userData) {
  return async (dispatch) => {
    // register that a login attempt is being made
    dispatch(loginAttempt());

    // contact login API
    await fetch(
      // where to contact
      '/api/authentication/login',
      // what to send
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((json) => {
      if (json) {
        dispatch(loginSuccess(json));
      } else {
        dispatch(loginFailure(new Error('Email or Password Incorrect. Please Try again.')));
      }
    })
    .catch((error) => {
      dispatch(loginFailure(new Error(error)));
    });
  };
}


// Log User Out
export function logUserOut() {
  return async (dispatch) => {
    // contact the API
    await fetch(
      // where to contact
      '/api/authentication/logout',
      // what to send
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      const status = response.status;
      if (status === 200) {
        dispatch(logoutSuccess());
      } else {
        dispatch(logoutFailure(new Error(response.status)));
      }
    })
    .catch((error) => {
      dispatch(logoutFailure(new Error(error)));
    });
  };
}

// Register a User
export function registerUser(userData) {
  return async (dispatch) => {
    // contact the API
    await fetch(
      // where to contact
      '/api/authentication/register',
      // what to send
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then(async (json) => {
      if (json && json.username) {
        await dispatch(loginSuccess(json));
        await dispatch(registrationSuccess());
      } else {
        dispatch(registrationFailure(new Error(json.error.message ? 'Email or username already exists' : json.error)));
      }
    })
    .catch((error) => {
      dispatch(registrationFailure(new Error(error.message || 'Registration Failed. Please try again.')));
    });
  };
}
