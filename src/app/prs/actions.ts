"use server";

import { z } from 'zod'
import { redirect } from 'next/navigation'
import prisma from '@/lib/client';

const schema = z.object({
  exercise: z.string(),
  weight: z.coerce.number(),
  date: z.coerce.date(),
});

export async function createPR(formData: FormData) {

  const validatedFields = schema.safeParse({
    exercise: formData.get('exercise'),
    weight: formData.get('weight'),
    date: formData.get('date'),
  })
 
  if (!validatedFields.success) {
    console.log( {
      errors: validatedFields.error.flatten().fieldErrors,
    })
    return
  }

  const res = await prisma.pR.create({
    data: validatedFields.data,
  })
  redirect('/prs')  
}
