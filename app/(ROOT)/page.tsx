import React, { useState } from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import Rightsidebar from '@/components/Rightsidebar'
const Home = () => {
    const loggedIn = { firstName: "Obul", lastName: "Reddy", email: "undelaobulreddy1@gmail.com" }
    return (
        <section className="home">
            <div className='home-content'>
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome "
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your Account and Transaction efficently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={999.99}
                    />
                </header>
                Transactions
            </div>

            <Rightsidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: "99" }, { currentBalance: "129" }]}
            />
        </section>
    )
}

export default Home