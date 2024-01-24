import { addListing } from "../actions"

// components
import SubmitButton from "@/app/components/SubmitButton"

export default function CreateForm() {
    
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
            <SubmitButton />
        </form>
    )
}