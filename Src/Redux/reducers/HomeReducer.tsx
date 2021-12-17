import {HomeAction, ItemModel } from '../actions/HomeAction';

type UserState = {
  Item: ItemModel;
  error: string | undefined;
};

const initialState = {
  Item: {} as ItemModel,
  error: undefined,
};

const HomeReducer = (state: UserState = initialState, action: HomeAction) => {
  switch (action.type) {
    case 'ON_ITEM_ADD':
      return {
        ...state,
        user: action.payload,
      };
    case 'ON_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { HomeReducer };