'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function BillsRightWidget() {
  return (
    <WidgetWrapper 
      title="Bills" 
      minHeight="min-h-[180px]"
      footerSource="Bills"
    >
      <div className="empty-state">
        There are no bills
      </div>
    </WidgetWrapper>
  )
}

