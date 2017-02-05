import { LINK_LIST_MOUSE_ENTER, LINK_LIST_MOUSE_LEAVE } from './home_app_actions';

export function linkListMouseLeave() {
  return {
    type: LINK_LIST_MOUSE_LEAVE,
  };
}

export function linkListMouseEnter(value) {
  return {
    type: LINK_LIST_MOUSE_ENTER,
    value,
  };
}
