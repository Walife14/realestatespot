"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
    const router = useRouter()

    const [road, setRoad] = useState('')
    const [postCode, setPostCode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('UK')
    const [body, setBody] = useState('')
    const [monthly, setMonthly] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        
        const listing = {
            road,
            post_code: postCode,
            city,
            country,
            body,
            monthly,
            user_email: 'dan@realestatespot.com'
        }

        const res = await fetch('http://localhost:4000/listings', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(listing)
        })

        if (res.status === 201) {
            router.refresh()
            router.push('/listings')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <label>
                <span>Road:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setRoad(e.target.value)}
                    value={road}
                />
            </label>
            <label>
                <span>Post Code:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setPostCode(e.target.value)}
                    value={postCode}
                />
            </label>
            <label>
                <span>City:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                />
            </label>
            <label>
                <span>Country:</span>
                <select
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                >
                    <option value="england">England</option>
                    <option value="scotland">Scotland</option>
                    <option value="wales">Wales</option>
                    <option value="northernireland">Northern Ireland</option>
                </select>
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>
            </label>
            <label>
                <span>Cost (Monthly):</span>
                <input
                    required
                    type="number"
                    onChange={(e) => setMonthly(e.target.value)}
                    value={monthly}
                />
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}