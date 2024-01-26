"use client"

export default function ImagePreviews({ images }: any) {
  return (
    <div className="grid grid-cols-2 place-items-center gap-2">
        {images.map((preview: any, index: number) => (
            <img
                key={index}
                src={preview.previewUrl}
                alt={`Preview of property image ${index+1}`}
            />
        ))}
    </div>
  )
}