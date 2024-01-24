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
        console.log(error)
    }

    revalidatePath('/listings')
    redirect('/listings')
}