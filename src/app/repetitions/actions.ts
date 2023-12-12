"use server";

import { z } from 'zod'
import { redirect } from 'next/navigation'
import prisma from '@/lib/db'

const schema = z.object({
  exercise: z.string(),
  repetition: z.coerce.number(),
  date: z.coerce.date(),
});

export async function createRepetition(formData: FormData) {

  const validatedFields = schema.safeParse({
    exercise: formData.get('exercise'),
    repetition: formData.get('repetition'),
    date: formData.get('date'),
  })
 
  if (!validatedFields.success) {
    console.log( {
      errors: validatedFields.error.flatten().fieldErrors,
    })
    return
  }

  const res = await prisma.repetition.create({
    data: validatedFields.data,
  })
  redirect('/repetitions')  
}
