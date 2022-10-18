import React from 'react'
import Day from './components/Day'
import Month from './components/Month'
import Week from './components/Week'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Month /> */}
      {/* <Day /> */}
      {/* <Week /> */}
      <div className='orange'><h3>Calendar</h3></div>
      <Routes>
        <Route path="/" element={<Day />} />
        <Route path="week" element={<Week />} />
        <Route path="month" element={<Month />} />
      </Routes>
    </div>
  )
}

export default App