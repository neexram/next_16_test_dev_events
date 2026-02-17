import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { title } from 'process'
import React from 'react'

const events = [
  {image: '/images/event1.png', 
    title: 'Event 1',
    slug: 'Event-1',
    location: 'location-1',
    date: 'date-1',
    time: 'time-1',
  },

]

const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for every Dev <br/> Event you Can't miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups and Conferences, All in One Place</p>
      <ExploreBtn/>
      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <div className='flex items-center gap-5'>
          <ul className='events'>
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default page
