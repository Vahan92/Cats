
export const CATEGORY_ACTIONS = {
  SUCCES_GET_CATEGORIES: '@CATEGORY/SUCCES_GET_CATEGORIES',
  SUCCES_GET_CATS: '@CATEGORY/SUCCES_GET_CATS',
  ATTEMPT_TO_GET_CATEGORIES: '@CATEGORY/ATTEMPT_TO_GET_CATEGORIES',
  ATTEMPT_TO_GET_CATS: '@CATEGORY/ATTEMPT_TO_GET_CATS',
};

export const attemptToGetCategories = () => {
  return {
  type: CATEGORY_ACTIONS.ATTEMPT_TO_GET_CATEGORIES,
}};

export const attemptToGetCats = (payload: any) => {
  return {
  type: CATEGORY_ACTIONS.ATTEMPT_TO_GET_CATS,
  payload
}};

export const succesGetCategories = (payload: any) => { return{
  type: CATEGORY_ACTIONS.SUCCES_GET_CATEGORIES,
  payload
}};

export const succesGetCats = (payload: any) => { return{
  type: CATEGORY_ACTIONS.SUCCES_GET_CATS,
  payload
}}
