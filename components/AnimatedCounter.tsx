'use client'
import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({count}:{count:number}) {
  return (
      <CountUp
          start={0}
          end={count}
          duration={1}
            separator=" "
            decimals={2}
            decimal=","
            prefix="&#8377;"
            suffix=" /-"
      />
  )
}

export default AnimatedCounter