import 'whatwg-fetch';
import clearError from './error';

// Action Creators
export const deleteCarAttempt = () => ({ type: 'DELETE_CAR_ATTEMPT' });
export const deleteCarSuccess = json => ({ type: 'DELETE_CAR_SUCCESS', json });
export const deleteCarFailure = error => ({ type: 'DELETE_CAR_FAILURE', error });
export const getCarAttempt = () => ({ type: 'GET_CAR_ATTEMPT' });
export const getCarSuccess = json => ({ type: 'GET_CAR_SUCCESS', json });
export const getCarFailure = error => ({ type: 'GET_CAR_FAILURE', error });
export const saveCarAttempt = () => ({ type: 'SAVE_CAR_ATTEMPT' });
export const saveCarSuccess = json => ({ type: 'SAVE_CAR_SUCCESS', json });
export const saveCarFailure = error => ({ type: 'SAVE_CAR_FAILURE', error });

export function deleteCar(id) {
  return async (dispatch) => {
    dispatch(clearError());
    dispatch(deleteCarAttempt());
    await fetch(
      '/api/car/delete',
      {
        method: 'POST',
        body: JSON.stringify({ id }),
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
      if (json && !json.error) {
        await dispatch(deleteCarSuccess(json));
      } else {
        dispatch(deleteCarFailure(new Error(json.error.message ? 'Can not delete car' : json.error)));
      }
    })
    .catch((error) => {
      dispatch(deleteCarFailure(new Error(error.message || 'Delete Failed. Please try again.')));
    });
  };
}

export function getCar() {
  return async (dispatch) => {
    dispatch(clearError());
    dispatch(getCarAttempt());
    // contact the API
    await fetch(
      '/api/car/list',
      {
        method: 'GET',
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
      await dispatch(getCarSuccess(json));
    })
    .catch((error) => {
      dispatch(getCarFailure(new Error(error.message || 'Get cars failed. Please try again.')));
    });
  };
}

export function saveCar(userData) {
  return async (dispatch) => {
    dispatch(clearError());
    dispatch(saveCarAttempt());
    await fetch(
      '/api/car/save',
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
      if (json && !json.error) {
        await dispatch(saveCarSuccess(json));
      } else {
        dispatch(saveCarFailure(new Error(json.error.message ? 'Can not save car' : json.error)));
      }
    })
    .catch((error) => {
      dispatch(saveCarFailure(new Error(error.message || 'Save Failed. Please try again.')));
    });
  };
}
