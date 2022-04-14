import { Api } from "../../../Axios/Axios";
import { IAssetResponse } from "./interfaces/IAsset";


export const validateSizeFile = (file: File): boolean => {
    return ((file.size / 1024) / 1024) > 100;
}

const uploadAsset = async (form: FormData): Promise<IAssetResponse | undefined> => {
    if(!form.has("fileUpload")) return undefined;
    
    try {
        return await Api.post(process.env.REACT_APP_URL_UPLOAD_ASSETS!, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }); 
    } catch (error) {
        return undefined;
    }
}

export { uploadAsset };