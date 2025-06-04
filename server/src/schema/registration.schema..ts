import z from 'zod';

export const RegistrationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    city: z.string().min(1, 'City is required'),
    district: z.string().min(1, 'District is required'),
    street: z.string().min(1, 'Street is required'),
    productName: z.string().min(1, 'Product name is required'),
    productColor: z.string().min(1, 'Product color is required'),
    productStorage: z.string().min(1, 'Product storage is required')
})

export type RegistrationType = z.infer<typeof RegistrationSchema>;