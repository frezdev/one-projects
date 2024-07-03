import { PhotosContext } from "@/context/photosContext";
import { useContext } from "react";

export const usePhotosContext = () => useContext(PhotosContext)