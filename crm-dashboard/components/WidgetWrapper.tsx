'use client'

import { ReactNode, useState } from 'react'

interface WidgetWrapperProps {
  title: string
  children: ReactNode
  minHeight?: string
  showFooter?: boolean
  footerSource?: string
  icon?: ReactNode
  menuItems?: { label: string; onClick: () => void }[]
}

export default function WidgetWrapper({
  title,
  children,
  minHeight = 'min-h-[180px]',
  showFooter = true,
  footerSource = 'General',
  icon,
  menuItems,
}: WidgetWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`widget ${minHeight}`}>
      {/* Header */}
      <div className="widget-header">
        <div className="flex items-center gap-2">
          {icon && <div className="text-blue-600">{icon}</div>}
          <h2 className="widget-title">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button 
            className="text-gray-400 hover:text-gray-600 relative"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            
            {showMenu && menuItems && (
              <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[200px]">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      item.onClick()
                      setShowMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </button>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`text-gray-400 hover:text-gray-600 transition-transform ${isCollapsed ? '-rotate-90' : ''}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Content */}
      {!isCollapsed && (
        <div className="widget-content">
          {children}
        </div>
      )}
      
      {/* Footer */}
      {!isCollapsed && showFooter && (
        <div className="widget-footer">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-xs">{footerSource}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs">Rate this widget</span>
            <button className="hover:text-green-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
            <button className="hover:text-red-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

