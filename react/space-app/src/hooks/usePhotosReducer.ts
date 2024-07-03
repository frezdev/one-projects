import { reducer } from '@/context/photosReducer';
import { useReducer } from 'react';

const initialState = {
  photos: [],
  filteredPhotos: [],
}

export const usePhotosReducer = () => useReducer(reducer, initialState)