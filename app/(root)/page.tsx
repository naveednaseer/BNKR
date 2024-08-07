import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'


const Home = () => {
  const loggedIn = { firstName: 'MyName', lastName: 'last', email: 'name@email.com'}

  return (
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
           type="greeting"
           title="welcome"
           user={loggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transactions."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500}
          />
        </header>

        Recent trnsaction
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 580.99}, {currentBalance: 2880.48}]}
      />
    </section>
  )
}

export default Home