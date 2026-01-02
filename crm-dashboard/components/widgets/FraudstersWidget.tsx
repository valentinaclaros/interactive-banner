'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function FraudstersWidget() {
  return (
    <WidgetWrapper 
      title="Fraudsters Or Suspects" 
      minHeight="min-h-[180px]"
      footerSource="Fraud Investigations - Core"
    >
      <div className="success-box">
        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-green-800 font-medium">This customer has no fraud reports.</p>
          <p className="text-green-700">All good!</p>
        </div>
      </div>
    </WidgetWrapper>
  )
}

