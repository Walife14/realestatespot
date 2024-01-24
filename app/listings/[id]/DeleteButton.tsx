"use client"

import { useRouter } from "next/navigation"
import { TiDelete } from "react-icons/ti"
import { useTransition } from "react"
import { deleteListing } from "../actions"

export default function DeleteButton({ id }: any) {
    const [isPending, startTransition] = useTransition()

    const router = useRouter()
    
    return (
        <button
            className="btn-primary"
            onClick={() => startTransition(() => deleteListing(id))}
            disabled={isPending}
        >
            {isPending && (
                <>
                    <TiDelete />
                    Deleting...
                </>
            )}
            {!isPending && (
                <>
                    <TiDelete />
                    Delete Listing
                </>
            )}
        </button>
    )
}