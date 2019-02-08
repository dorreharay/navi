import actionTypes from '../actionTypes/actionTypes';

const initState = {
  templates: [],
  properties: [],
};

export default function HomeReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_FETCH_HOUSE_MAP:
      return {
        ...state,
        templates: action.payload.templates,
        properties: action.payload.props.data.map(item => (
          { ...item, price: `$${item.price}`, area: item.area ? `${item.area} sq. fr` : undefined }
        )),
      };
    default:
      return state;
  }
}
