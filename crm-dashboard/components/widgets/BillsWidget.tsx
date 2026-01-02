'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function BillsWidget() {
  return (
    <WidgetWrapper 
      title="Bills" 
      minHeight="min-h-[180px]"
      footerSource="Co-Operations"
    >
      <div className="empty-state">
        No bills found
      </div>
    </WidgetWrapper>
  )
}

