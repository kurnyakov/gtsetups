import 'whatwg-fetch';
import clearError from './error';

// Action Creators
export const deleteCategorySuccess = json => ({ type: 'DELETE_CATEGORY_SUCCESS', json });
export const deleteCategoryFailure = error => ({ type: 'DELETE_CATEGORY_FAILURE', error });
export const getCategorySuccess = json => ({ type: 'GET_CATEGORY_SUCCESS', json });
export const getCategoryFailure = error => ({ type: 'GET_CATEGORY_FAILURE', error });
export const saveCategorySuccess = json => ({ type: 'SAVE_CATEGORY_SUCCESS', json });
export const saveCategoryFailure = error => ({ type: 'SAVE_CATEGORY_FAILURE', error });

export function deleteCategory(id) {
  return async (dispatch) => {
    dispatch(clearError());
    await fetch(
      '/api/category/delete',
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
        await dispatch(deleteCategorySuccess(json));
      } else {
        dispatch(deleteCategoryFailure(new Error(json.error.message ? 'Can not delete category' : json.error)));
      }
    })
    .catch((error) => {
      dispatch(deleteCategoryFailure(new Error(error.message || 'Delete Failed. Please try again.')));
    });
  };
}

export function getCategory() {
  return async (dispatch) => {
    dispatch(clearError());
    // contact the API
    await fetch(
      '/api/category/list',
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
      await dispatch(getCategorySuccess(json));
    })
    .catch((error) => {
      dispatch(getCategoryFailure(new Error(error.message || 'Get categories failed. Please try again.')));
    });
  };
}

export function saveCategory(userData) {
  return async (dispatch) => {
    dispatch(clearError());
    await fetch(
      '/api/category/save',
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
        await dispatch(saveCategorySuccess(json));
      } else {
        dispatch(saveCategoryFailure(new Error(json.error.message ? 'Category already exists' : json.error)));
      }
    })
    .catch((error) => {
      dispatch(saveCategoryFailure(new Error(error.message || 'Save Failed. Please try again.')));
    });
  };
}
