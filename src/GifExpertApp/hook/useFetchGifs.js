import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const datos = await getGifs(category);
        setImages(datos);
        setIsLoading(false);
    }

    useEffect(() => {
            getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
