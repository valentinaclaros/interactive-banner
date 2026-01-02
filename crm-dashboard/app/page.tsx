import Header from '@/components/Header'
import PersonInformation from '@/components/widgets/PersonInformation'
import FraudstersWidget from '@/components/widgets/FraudstersWidget'
import CardsWidget from '@/components/widgets/CardsWidget'
import BillsWidget from '@/components/widgets/BillsWidget'
import CurrentSituationWidget from '@/components/widgets/CurrentSituationWidget'
import CollectionHistoryWidget from '@/components/widgets/CollectionHistoryWidget'
import FinancingWidget from '@/components/widgets/FinancingWidget'
import CreditCardWidget from '@/components/widgets/CreditCardWidget'
import ChargebacksWidget from '@/components/widgets/ChargebacksWidget'
import BillsRightWidget from '@/components/widgets/BillsRightWidget'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crm-purple-light to-crm-purple-dark">
      {/* Header */}
      <Header />
      
      {/* Main Content Area - 4 Column Grid */}
      <div className="p-8">
        <div className="grid grid-cols-4 gap-4 auto-rows-min">
          {/* Column 1 - Person Information */}
          <div className="flex flex-col gap-4">
            <PersonInformation />
          </div>
          
          {/* Column 2 - Fraudsters, Cards, Bills */}
          <div className="flex flex-col gap-4">
            <FraudstersWidget />
            <CardsWidget />
            <BillsWidget />
          </div>
          
          {/* Column 3 - Current Situation, Collection History, Financing */}
          <div className="flex flex-col gap-4">
            <CurrentSituationWidget />
            <CollectionHistoryWidget />
            <FinancingWidget />
          </div>
          
          {/* Column 4 - Credit Card, Chargebacks, Bills */}
          <div className="flex flex-col gap-4">
            <CreditCardWidget />
            <ChargebacksWidget />
            <BillsRightWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

