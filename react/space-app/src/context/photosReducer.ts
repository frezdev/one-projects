import { Reducer } from "react";
import { type Photo } from "@/types";

const actionTypes = {
  SET_PHOTOS: "SET_PHOTOS",
  SET_FILTERED_PHOTOS: "SET_FILTERED_PHOTOS"
} as const

export enum ActionTypes {
  SET_PHOTOS = "SET_PHOTOS",
  SET_FILTERED_PHOTOS = "SET_FILTERED_PHOTOS"
}
interface State {
  photos: Photo[]
  filteredPhotos: Photo[]
}

interface ActionSetPhotos {
  type: typeof ActionTypes.SET_PHOTOS,
  payload: Photo[]
}

interface ActionSetFilteredPhotos {
  type: typeof ActionTypes.SET_FILTERED_PHOTOS,
  payload: Photo[]
}

export type Action = ActionSetPhotos | ActionSetFilteredPhotos


export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PHOTOS:
      return { ...state, photos: action.payload };
    case actionTypes.SET_FILTERED_PHOTOS:
      return { ...state, filteredPhotos: action.payload };
    default:
      return state;
  }
}