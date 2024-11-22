import { formatAmount } from '@/lib/utils'
import DoughnutChart from '../components/DoughnutChart';

import AnimatedCounter from './AnimatedCounter';

const TotalBalanceBox = ({
    accounts =[], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts} />
        </div>
        <div className="flex flex-col gap-6">
            <div className="header-2">
            {totalBanks} Bank Accounts
            </div>
           <div className="flex flex-col gap-2">
            <p className='total-balance-label'>
                Total Current Balance
            </p>
            <div className='total-balance-amount flex-center gap-2'>
                <AnimatedCounter amount={totalCurrentBalance} 
                // {formatAmount(totalCurrentBalance)}
                />
                
            </div>
           </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox