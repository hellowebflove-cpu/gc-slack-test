import React from 'react'

// Site-wide strip above the header. Text lives here in code (not in the CMS).
export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-black text-white text-center text-sm py-2 px-4">
      Free shipping on all orders this week
    </div>
  )
}
