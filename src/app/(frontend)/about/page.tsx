import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Ground Test Store',
}

export default function AboutPage() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-semibold mb-6">About us</h1>
      <div className="prose dark:prose-invert max-w-2xl">
        <p>
          Ground Test Store makes small-batch clothing in limited capsules. Every piece is cut and
          sewn in our studio.
        </p>
        <p>We release a new capsule every season. When a capsule sells out, it does not come back.</p>
        <h2>Contact</h2>
        <p>
          Questions about an order? Write to <a href="mailto:hello@example.com">hello@example.com</a>.
        </p>
      </div>
    </main>
  )
}
