"use client"

import { useState } from "react"

import { addListing } from "../actions"

// components
import SubmitButton from "@/app/components/SubmitButton"
import ImagePreviews from "./ImagePreviews"

export default function CreateForm() {
    const [selectedImages, setSelectedImages] = useState<any>([])

    const handleImageChanges = (e: any) => {
        const files = e.target.files

        const previews = Array.from(files).map((file: any) => {
            const previewUrl = URL.createObjectURL(file)
            return { file, previewUrl }
        })

        setSelectedImages(previews)
    }
    
    return (
        <form action={addListing} className="w-full">
            <label>
                <span>Road:</span>
                <input
                    name="road"
                    required
                    type="text"
                />
            </label>
            <label>
                <span>Post Code:</span>
                <input
                    name="post_code"
                    required
                    type="text"
                />
            </label>
            <label>
                <span>City:</span>
                <input
                    name="city"
                    required
                    type="text"
                />
            </label>
            <label>
                <span>Country:</span>
                <select
                    name="country"
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
                    name="body"
                    required
                ></textarea>
            </label>
            <label>
                <span>Cost (Monthly):</span>
                <input
                    name="monthly"
                    required
                    type="number"
                />
            </label>
            <label>
                <span>Property images:</span>
                <input
                    name="image"
                    required
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChanges}
                />
            </label>

            <div className="my-2">
                <span>Preview of selected property image(s):</span>
                <ImagePreviews images={selectedImages} />
            </div>
                
            <SubmitButton />
        </form>
    )
}