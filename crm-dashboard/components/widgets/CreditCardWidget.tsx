'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function CreditCardWidget() {
  return (
    <WidgetWrapper 
      title="Credit Card Account" 
      minHeight="min-h-[180px]"
      footerSource="Co-Operations"
    >
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3">
        <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p className="text-sm text-gray-700">Customer does not have a credit card account</p>
      </div>
    </WidgetWrapper>
  )
}

