"use server"

import { cookies } from "next/headers"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addListing(formData: FormData) {
    
    const listing = Object.fromEntries(formData.entries())

    const supabase = createServerActionClient({ cookies })

    const { data: { session }} = await supabase.auth.getSession()

    // insert the data
    const { error } = await supabase.from('listings')
        .insert({
            ...listing,
            user_email: session?.user.email
        });
    
    if (error) {
        throw new Error('Could not add a new listing')
    }

    revalidatePath('/listings')
    redirect('/listings')
}

export async function deleteListing(id: string) {
    const supabase = createServerActionClient({ cookies })

    // delete the data
    const { error } = await supabase.from('listings')
        .delete()
        .eq('id', id)
    
    if (error) {
        throw new Error('Could not delete the listing')
    }

    revalidatePath('/listings')
    redirect('/listings')
} 