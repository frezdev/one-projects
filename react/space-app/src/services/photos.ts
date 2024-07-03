import type { Photo, PopularPhoto } from "@/types"

const getAll = async () => {
  try {
    const response = await fetch('/gallery.json')

    if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`)

    const photos = await response.json() as Photo[]

    return { error: null, data: photos }

  } catch (error) {
    if (error instanceof Error) {
      return { error, data: null }
    }
    return {
      error: new Error('Error desconocido'),
      data: null
    }
  }
}

const getPopular = async () => {
  try {
    const response = await fetch('/popular.json')

    if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`)

    const photos = await response.json() as PopularPhoto[]

    return { error: null, data: photos }

  } catch (error) {
    if (error instanceof Error) {
      return { error, data: null }
    }
    return {
      error: new Error('Error desconocido'),
      data: null
    }
  }
}

export const PhotosService = {
  getAll,
  getPopular
}