import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function AuthLayout({ children }: any) {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        redirect('/')
    }

    return (
        <>
            { children }
        </>
    )
}