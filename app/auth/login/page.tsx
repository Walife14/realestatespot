"use client"

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// components
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";

export default function Login() {
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: any, email: string, password: string) => {
        e.preventDefault()
        setError('')

        const supabase = await createClientComponentClient()
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            setError(error.message)
        }
        if (!error) {
            location.reload()
            router.push('/')
        }
    }

    return (
        <main>
            <h2 className="text-center">Log in</h2>

            <AuthForm handleSubmit={handleSubmit} />

            {error && (
                <div className="error">{ error }</div>
            )}
        </main>
    )
}