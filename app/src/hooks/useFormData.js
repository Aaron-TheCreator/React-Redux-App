import { useLocalStorage } from "./useLocalStorage";

export const useFormData = ( key, initialValues, callback) => {
    const [values, setValues] = useLocalStorage(key, initialValues);

    
}
