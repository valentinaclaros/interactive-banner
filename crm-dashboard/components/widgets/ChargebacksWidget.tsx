'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function ChargebacksWidget() {
  return (
    <WidgetWrapper 
      title="Chargebacks" 
      minHeight="min-h-[320px]"
      footerSource="Chargeback"
      menuItems={[
        { label: 'Open Triage', onClick: () => console.log('Open Triage') }
      ]}
    >
      <div className="empty-state">
        <p className="mb-4">There are no chargebacks</p>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
          <button className="hover:text-gray-600">Load</button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-400">Chargeback</span>
        </div>
      </div>
    </WidgetWrapper>
  )
}

