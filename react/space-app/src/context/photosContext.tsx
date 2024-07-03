import { createContext, useEffect } from 'react'
import { type Photo } from '@/types'
import { usePhotosReducer } from '@/hooks/usePhotosReducer';
import { ActionTypes } from './photosReducer';

interface DefaultValue {
  photos: Photo[];
  filteredPhotos: Photo[];
  handleSetPhotos: (photos: Photo[]) => void;
  handleFilterPhotos: (query: string) => void;
}

const defaultValue: DefaultValue = {
  photos: [],
  filteredPhotos: [],
  handleSetPhotos: () => { },
  handleFilterPhotos: () => { }
}
export const PhotosContext = createContext(defaultValue)

export const PhotosContexProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = usePhotosReducer()

  const handleSetPhotos = (photos: Photo[]) => dispatch({ type: ActionTypes.SET_PHOTOS, payload: photos })

  const handleFilterPhotos = (query: string) => {
    if (query === '') {
      dispatch({ type: ActionTypes.SET_FILTERED_PHOTOS, payload: state.photos })
      return
    }
    const newFilteredPhotos = state.photos.filter(
      photo => photo.title.toLowerCase().includes(query.toLowerCase())
    )
    dispatch({ type: ActionTypes.SET_FILTERED_PHOTOS, payload: newFilteredPhotos })
  }

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_FILTERED_PHOTOS, payload: state.photos })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.photos])

  return (
    <PhotosContext.Provider value={{
      photos: state.photos,
      filteredPhotos: state.filteredPhotos,
      handleSetPhotos,
      handleFilterPhotos
    }}>
      {children}
    </PhotosContext.Provider>
  )
}