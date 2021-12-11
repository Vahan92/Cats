import { ACTION_STATUSES } from '../../utils/constants';
import { CATEGORY_ACTIONS } from '../actions/categories';

const ATTEMPT_TO_GET_CATEGORIES = (state: any) => {
  return {
    ...state,
    status: ACTION_STATUSES.PENDING
  }
};

const SUCCESS_TO_GET_CATEGORIES = (state: any, { payload }: any) => {
  return {
    ...state,
    status: ACTION_STATUSES.SUCCEED,
    categories: payload
  }
};

const SUCCES_GET_CATS = (state: any, { payload }: any) => {
  return {
    ...state,
    status: ACTION_STATUSES.SUCCEED,
    cats: payload
  }
};

export default (state: any = [], action: any) => {
  switch (action.type) {
    case CATEGORY_ACTIONS.ATTEMPT_TO_GET_CATEGORIES:
      return ATTEMPT_TO_GET_CATEGORIES(state);
    case CATEGORY_ACTIONS.SUCCES_GET_CATEGORIES:
      return SUCCESS_TO_GET_CATEGORIES(state, action);
    case CATEGORY_ACTIONS.SUCCES_GET_CATS:
      return SUCCES_GET_CATS(state, action);
    default:
      return state;
  }
};