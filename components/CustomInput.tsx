import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input"
import { Control, Field, FieldPath, Form } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'



const formSchema = authFormSchema('sign-up')

interface CustomInput {
    // Control is a type from React Hook Form. It represents the form control object that React Hook Form 
    // uses to manage form state, validation, and interactions with inputs.

    // When you write Control<z.infer<typeof authFormSchema>>, you're specifying that the "control" object is 
    // designed to manage the form state for a form that matches the structure defined by authFormSchema.
    // So, basically its helps us set some rules that user has to follow when filling a form, like the 
    // minimum or maximum length of characters for that field
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>, 
    // 1) name can be any one from utils.ts like email or password
    // 2) By passing a type into FieldPath, you're telling TypeScript 
    //    to create a type that represents all the possible keys you could use as a name prop in form fields.
    //    and in this case the keys are coming from authFormSchema in /lib/utils.ts
    label: string,
    placeholder: string
}


const CustomInput = ({ control, name, label, placeholder}: CustomInput) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input 
                            placeholder={placeholder} 
                            className='input-class' type={name === 'password' ? 'password' : 'text'} 
                            {...field} 
                        />
                    </FormControl>

                    <FormMessage className='form-message mt-2' />
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput