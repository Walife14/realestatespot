import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import ListingList from "../listings/ListingList"
import { Suspense } from "react"

export default async function page() {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()

    if (!(data.session)) {
        redirect('/')
    }

    const email = data.session.user.email

    return (
        <main>
            <div>My Listings</div>
            <Suspense>
                <ListingList email={email} />
            </Suspense>
        </main>
    )
}
