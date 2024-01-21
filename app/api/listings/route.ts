import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

// means it would re-run from scratch whenever a new request comes in
export const dynamic = 'force-dynamic'

export async function POST(request: any) {
    const listing = await request.json()

    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies })

    // get the current user session
    const { data: { session } } = await supabase.auth.getSession()

    // insert the data into supabase
    const { data, error } = await supabase.from('listings')
        .insert({
            ...listing,
            user_email: session!.user.email
        })
        .select()
        .single()
    
    return NextResponse.json({ data, error })
    
}