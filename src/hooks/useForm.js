import { useState } from "react";

export const useForm = (  inititalState = {} ) => {
  
    const [formValues, setFormValues] = useState(inititalState);


    const reset = () => {
        setFormValues( inititalState);
    }


    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]  : target.value
        });
    }

    // retorno el estado del useState y su función
    return [formValues, handleInputChange, reset];

}