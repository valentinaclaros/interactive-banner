'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function CurrentSituationWidget() {
  return (
    <WidgetWrapper 
      title="Current Situation" 
      minHeight="min-h-[320px]"
      footerSource="Collections"
    >
      <div className="space-y-3">
        {/* Tabs */}
        <div className="flex gap-4 border-b">
          <button className="pb-2 px-1 text-sm font-medium border-b-2 border-purple-600 text-purple-600">
            Credit-Card
          </button>
          <button className="pb-2 px-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700">
            Lending
          </button>
        </div>

        {/* Info Messages */}
        <div className="space-y-3">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-start gap-2">
            <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-gray-700">Customer does not have a credit card account.</p>
            <button className="ml-auto">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="success-box">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm text-green-800">No active credit card collection for the customer</p>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  )
}

