import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'


const Home = async() => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
           type="greeting"
           title="welcome"
           user={loggedIn?.name || 'Guest'}
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