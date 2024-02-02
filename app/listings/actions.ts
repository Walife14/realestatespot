"use server"

import { cookies } from "next/headers"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addListing(formData: FormData) {
    const listing = {
        road: formData.get('road'),
        post_code: formData.get('post_code'),
        city: formData.get('city'),
        country: formData.get('country'),
        body: formData.get('body'),
        monthly: formData.get('monthly'),
    }

    // store all image urls
    const imageUrls: string[] = []

    const supabase = createServerActionClient({ cookies })

    const { data: { session }} = await supabase.auth.getSession()

    // store the provided images in the storage bucket
    for (const image of formData.getAll('image')) {
        if (image instanceof File) {
            const { data, error } = await supabase
                .storage
                .from('property-images')
                .upload(`${Date.now()}_${image.name}`, image)
            
            if (error) {
                console.log("failed to upload images", error.message)
            } else {
                // getting the Url for the data
                const res = supabase
                    .storage
                    .from('property-images')
                    .getPublicUrl(data.path)

                imageUrls.push(res.data.publicUrl)
            }
        }
    }

    // insert the data
    const { error } = await supabase.from('listings')
        .insert({
            ...listing,
            images: imageUrls, // adding the images that we have added to the DB for this listing
            user_email: session?.user.email
        });
    
    if (error) {
        console.log("failed to add listing to db: ", error.message)
        // throw new Error('Could not add a new listing')
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