import * as z from 'zod';

export const personalSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(6),
})
export const corporateSchema = z.object({
    username: z.string().min(4, {
        message: 'Username must be at least 2 characters'
    }),
    email: z.string().min(1),
    password: z.string().min(6, {
        message: 'Passord must have a minimum of 6 characters'
    }
    ),

})