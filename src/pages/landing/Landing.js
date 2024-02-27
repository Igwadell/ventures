import React from 'react'
import Hero from './components/hero/Hero' // Ensure correct path and file name
import OurPeople from './components/hero/OurPeople'

export default function Landing() { // Use PascalCase for component names
  return (
    <div id="home">
      <Hero />
      <OurPeople />
    </div>
  )
}
