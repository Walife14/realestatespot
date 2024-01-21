"use client"

import AuthForm from "../AuthForm";

export default function Login() {

    const handleSubmit = async (e: any, email: string, password: string) => {
        e.preventDefault()

        console.log('User log in', email, password)
    }

    return (
        <main>
            <h2 className="text-center">Log in</h2>

            <AuthForm handleSubmit={handleSubmit} />
        </main>
    )
}