'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'

interface ProductCardProps {
  product: ProductType
  updateSignedInUser?: (updatedUser: UserType) => void
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      {/* 第一张图片 */}
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">${product.price}</p>
        <Heart />
      </div>
    </Link>
  )
}

export default ProductCard
