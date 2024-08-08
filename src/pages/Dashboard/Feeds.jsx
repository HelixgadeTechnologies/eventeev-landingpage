import React from 'react'

const Feeds = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome GDG Port Harcourt</h1>
      <p className="mt-2">You currently have no event listed here.</p>
      <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded">
        Create your first event
      </button>
    </div>
  );
}

export default Feeds