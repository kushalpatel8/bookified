import React from 'react'
import HeroSection from '@/components/HeroSection'
import { sampleBooks } from '@/lib/constants'
import BookCard from '@/components/BookCard'

const page = () => {
  return (
    <main className='wrapper container'>
      <HeroSection />
      <div className='flex flex-wrap justify-evenly library-hero-grid'>
        {sampleBooks.map((book) =>(
          <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
        ))}
      </div>
    </main>
  )
}

export default page
