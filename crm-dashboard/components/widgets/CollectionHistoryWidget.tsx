'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function CollectionHistoryWidget() {
  return (
    <WidgetWrapper 
      title="Customer Collection History" 
      minHeight="min-h-[200px]"
      footerSource="Collections"
    >
      <div className="empty-state">
        <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-purple-600 rounded-full mx-auto mb-2"></div>
        <p>Load</p>
      </div>
    </WidgetWrapper>
  )
}

