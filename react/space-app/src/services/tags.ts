import { Tag } from "@/types"

const getAll = async () => {
  try {
    const response = await fetch('/tags.json')

    if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`)

    const photos = await response.json() as Tag[]

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

export const tagsService = {
  getAll
}