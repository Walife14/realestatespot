"use client"

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="btn-primary"
        >
            {pending && <span>Submitting...</span>}
            {!pending && <span>Submit</span>}
        </button>
    )
}