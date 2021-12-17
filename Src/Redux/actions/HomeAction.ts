import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
import { Dispatch } from 'react';

export interface ItemModel {
  title: string;
  description: string;
  timeStamp: string;
  favourite:false;
}

export interface ItemAddAction {
  readonly type: 'ON_ITEM_ADD';
  payload: ItemModel;
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type HomeAction = ItemAddAction | ErrorAction;

// we need to dispatch action
export const onItemAdd = (title: string, description: string ) => {
  return async (dispatch: Dispatch<HomeAction>) => {
    try {
      const docRef = await addDoc(collection(db, "Items"), {
          title,
          description,
          timeStamp:Date.now(),
          favourite:false,
      });
      console.log("Document written with ID: ", docRef.id);

      if (!docRef) {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Login issue with API',
        });
      } else {
        dispatch({
          type: 'ON_ITEM_ADD',
          payload: docRef.data,
        });
      }
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};