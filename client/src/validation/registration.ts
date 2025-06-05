import { z } from 'zod';

export const personalInfoSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required").regex(/^\d{10,15}$/, "Phone number must be between 10 and 15 digits"),
})

export const addressInfoSchema = z.object({
    city: z.string().min(1, "City is required"),
    district: z.string().min(1, "District is required"),
    street: z.string().min(1, "Street is required"),
})

export const productInfoSchema = z.object({
    productName: z.string().min(1, "Product name is required"),
    productColor: z.string().min(1, "Product color is required"),
    productStorage: z.string().min(1, "Product storage is required"),
})

export const registrationSchema = personalInfoSchema.merge(addressInfoSchema).merge(productInfoSchema)

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>
export type AddressInfoFormData = z.infer<typeof addressInfoSchema>
export type ProductInfoFormData = z.infer<typeof productInfoSchema>
export type RegistrationFormData = z.infer<typeof registrationSchema>
