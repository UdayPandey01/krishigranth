import prisma from '@/lib/db'
import React from 'react'

const page = async () => {
    const crops = await prisma.crop.findMany()

  return (
    <ul>
        {crops.map((crop) => (
            <li key={crop.id}>
                {crop.cropName}
            </li>
        ))}
    </ul>
  )
}

export default page