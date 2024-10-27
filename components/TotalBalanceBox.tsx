import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

function TotalBalanceBox({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) {
  return (
    <section className='total-balance'>
          <div className='total-balance-chart'>
              <DoughnutChart accounts={accounts} />
          </div>
          <div className='flex flex-col gap-6'>
              <h1>
                 Bank Accounts: {totalBanks}
              </h1>
              <div>
                 <p className='tota-balance-label'>
                    total current balance
                  </p>
                  <p className='total-balance-amount flex-center gap-2'>
                      <AnimatedCounter
                        count ={totalCurrentBalance}
                      /> 
                  </p>
                  
              </div>
              
          </div>
    </section>
  )
}

export default TotalBalanceBox