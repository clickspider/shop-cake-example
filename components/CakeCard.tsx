"use client";

import { useState } from 'react';
import Image from 'next/image';

interface CakeCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function CakeCard({ name, description, price, image }: CakeCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="cake-card">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
        {isLoading && <div className="loading-image absolute inset-0" />}
      </div>
      <div className="p-6">
        <h3 className="cake-name text-2xl mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">${price}</span>
          <button className="order-button">Add to Order</button>
        </div>
      </div>
    </div>
  );
}