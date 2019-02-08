import actionTypes from '../actionTypes/actionTypes';

export const fetchHouseMap = () => ({
  type: actionTypes.FETCH_HOUSE_MAP,
});
export const successFetchHouseMap = (templates, props) => ({
  type: actionTypes.SUCCESS_FETCH_HOUSE_MAP,
  payload: { templates, props },
});

export default fetchHouseMap;
