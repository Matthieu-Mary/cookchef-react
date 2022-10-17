import React from 'react';
import styles from "./RecipeForm.module.scss";
import * as yup from "yup";
import { appendErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react"
import { ApiContext } from '../../../../context/ApiContext';

export default function RecipeFrom() {

    const BASE_URL = useContext(ApiContext)

    const defaultValues = {
        title: "",
        image: ""
    }

    const recipeSchema = yup.object({
        title: yup.string().required('Le tritre de la recette doit être renseigné').min(10, "Le titre doit être explicite").max(30, "Le tritre doit être succinct"),
        image: yup.string().required("Il faut impérativement renseigner une image").url("L'image doit être un lien valide")
    })

    const { formState: { errors, isSubmitting }, handleSubmit, register, clearErrors, reset } = useForm({
        defaultValues,
        resolver: yupResolver(recipeSchema)
    })


    async function submit(values) {
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(values)
            })
            if(response.ok) {
                reset(defaultValues)
            } else {
                console.log("Erreur lors de l'envoie de la requête")
            }
        } catch(e) {
            console.log('erreur :' + e)
        }
    }

  return (
    <form onSubmit={handleSubmit(submit)} className={`d-flex flex-column card p-20 ${styles.recipeForm}`}>

        <h2 className='mb-20'>Ajouter une recette</h2>

        <div className='d-flex flex-column mb-20'>
            <label>Titre de la recette</label>
            <input {...register('title')} type="text" />
            {errors.title && <small className='form-error'>{errors.title.message}</small>}
        </div>
        <div className='d-flex flex-column mb-20'>
            <label>Image pour la recette</label>
            <input {...register('image')} type="text" />
            {errors.title && <small className='form-error'>{errors.image.message}</small>}
        </div>

        <div>
            <button disabled={isSubmitting} className='btn btn-primary'>Sauvergarder</button>
        </div>

    </form>
  )
}
