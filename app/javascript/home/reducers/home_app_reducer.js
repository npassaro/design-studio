import update from 'react-addons-update';
import { LINK_LIST_MOUSE_ENTER, LINK_LIST_MOUSE_LEAVE } from './../actions/home_app_actions';

const initialState = {
  brand: '',
};

export default function homeAppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LINK_LIST_MOUSE_ENTER: {
      const brand = action.value;
      return update(state, { brand: { $set: brand } });
    }
    case LINK_LIST_MOUSE_LEAVE: {
      return update(state, { brand: { $set: initialState.brand } });
    }
    default:
      return state;
  }
}
