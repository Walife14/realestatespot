import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE(_: any, { params }: any) {
    const id = params.id

    const supabase = createRouteHandlerClient({ cookies })

    const { error } = await supabase.from('listings')
        .delete()
        .eq('id', id)

    return NextResponse.json({ error })
}