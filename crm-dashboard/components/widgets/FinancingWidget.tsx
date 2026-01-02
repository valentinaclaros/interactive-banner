'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function FinancingWidget() {
  return (
    <WidgetWrapper 
      title="Financing" 
      minHeight="min-h-[200px]"
      footerSource="Financing"
    >
      <div className="text-center py-6">
        <p className="text-gray-600 mb-4">Something went wrong. Try again later.</p>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm font-medium">
          Reload
        </button>
      </div>
    </WidgetWrapper>
  )
}

