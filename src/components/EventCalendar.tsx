'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//temporary data
const events = [
  {
    id: 1,
    title: 'Meeting',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    title: 'Lunch Break',
    time: '1:00 PM - 3:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 3,
    title: 'Homework',
    time: '3:00 PM - 5:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
            <h1 className='text-xl font-semibold my-4'>Events</h1>
            <Image src='/moreDark.png' alt='event' height={20} width={20}/>
        </div>
        <div className="flex flex-col gap-4">
            {events.map(event=>(
                <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple">
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-gray-400 text-xs'>{event.time}</span>
                    </div>
                    <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                </div>
            ))}
        </div>
      </div>
    );
}

export default EventCalendar