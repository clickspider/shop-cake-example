"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  cakeType: z.string().min(1, 'Please select a cake type'),
  size: z.string().min(1, 'Please select a size'),
  requests: z.string(),
  pickupDate: z.string().min(1, 'Please select a pickup date'),
});

type FormData = z.infer<typeof schema>;

export default function OrderForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-lg fade-in">
        <h3 className="text-2xl font-semibold text-primary mb-4">Thank You!</h3>
        <p>Your order has been received. We'll contact you shortly to confirm the details.</p>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            id="name"
            {...register('name')}
            className="form-input"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            id="email"
            {...register('email')}
            type="email"
            className="form-input"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
          <input
            id="phone"
            {...register('phone')}
            type="tel"
            className="form-input"
            placeholder="Your phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cakeType" className="block text-sm font-medium mb-2">Cake Type</label>
          <select id="cakeType" {...register('cakeType')} className="form-input">
            <option value="">Select a cake type</option>
            <option value="chocolate">Chocolate</option>
            <option value="vanilla">Vanilla</option>
            <option value="redVelvet">Red Velvet</option>
            <option value="carrot">Carrot</option>
          </select>
          {errors.cakeType && (
            <p className="text-red-500 text-sm mt-1">{errors.cakeType.message}</p>
          )}
        </div>

        <div>
          <fieldset>
            <legend className="block text-sm font-medium mb-2">Size</legend>
            <div className="space-x-4">
              {['6"', '8"', '10"', '12"'].map((size) => (
                <label key={size} className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register('size')}
                    value={size}
                    className="form-radio"
                  />
                  <span className="ml-2">{size}</span>
                </label>
              ))}
            </div>
          </fieldset>
          {errors.size && (
            <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="requests" className="block text-sm font-medium mb-2">Special Requests</label>
          <textarea
            id="requests"
            {...register('requests')}
            className="form-input h-32"
            placeholder="Any special instructions or requests?"
          />
        </div>

        <div>
          <label htmlFor="pickupDate" className="block text-sm font-medium mb-2">Preferred Pickup Date</label>
          <div className="relative">
            <input
              id="pickupDate"
              {...register('pickupDate')}
              type="date"
              className="form-input"
              min={today}
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.pickupDate && (
            <p className="text-red-500 text-sm mt-1">{errors.pickupDate.message}</p>
          )}
        </div>

        <button type="submit" className="w-full cta-button">
          Submit Order
        </button>
      </div>
    </form>
  );
}