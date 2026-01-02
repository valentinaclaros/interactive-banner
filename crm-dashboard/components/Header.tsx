'use client'

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-crm-purple-light to-crm-purple-dark text-white px-8 py-6">
      <div className="flex items-start justify-between mb-6">
        {/* User Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-2xl">
            <span>Wilmer</span>
            <span className="text-gray-300">·</span>
            <span className="text-xl text-gray-200">MARÍA MACEDO</span>
            <span className="text-gray-300">·</span>
            <span className="text-xl text-gray-200">CC-1234567890</span>
          </div>
          <div className="text-sm text-gray-300">
            Customer ID: 12345 • Shard: shard-01
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white text-crm-purple rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
            Edit
          </button>
          <button className="px-4 py-2 bg-white text-crm-purple rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
            Actions
          </button>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {['General', 'Bills', 'Bills CO', 'Fraud', 'Acquisition', 'Savings', 'Card', 'Pricing', 'Lending', 'CC Mass Market', 'Chargeback', 'Collections', 'RegOps', 'Mobility', 'Data protection', 'NU+'].map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Filter Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-white text-crm-purple rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
          Select all
        </button>
        <button className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors text-sm border border-white/30">
          Filter widgets
        </button>
      </div>
    </header>
  )
}

