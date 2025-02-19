'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const newTodo = async (FormData) => {
  const todo = await db.todo.create({
    data: {
      content: FormData.get('content')
    },
  })


  revalidatePath('/todos')
}
