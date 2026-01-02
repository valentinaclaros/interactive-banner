'use client'

import { useState } from 'react'
import WidgetWrapper from '../WidgetWrapper'

export default function CardsWidget() {
  const [activeTab, setActiveTab] = useState<'physical' | 'virtual' | 'additional'>('physical')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [cancelReason, setCancelReason] = useState('')
  const [confirmCode, setConfirmCode] = useState('')
  const [cancelledCards, setCancelledCards] = useState<Set<string>>(new Set())
  
  const confirmationCode = '123456'

  const handleCancelCard = () => {
    if (selectedCard && cancelReason && confirmCode === confirmationCode) {
      setCancelledCards(new Set([...cancelledCards, selectedCard]))
      setShowCancelModal(false)
      setCancelReason('')
      setConfirmCode('')
      setSelectedCard(null)
      
      // Show toast (simplified)
      alert('Cards updated successfully')
    }
  }

  return (
    <>
      <WidgetWrapper 
        title="Cards" 
        minHeight="min-h-[320px]"
        footerSource="Cards"
      >
        <div className="space-y-4">
          {/* Filter Section */}
          <div className="flex items-center justify-between pb-3 border-b">
            <h3 className="text-sm font-medium">Filtrar cartões</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">
                Cancel Cards
              </button>
              <button className="px-3 py-1 text-xs text-purple-600 hover:bg-purple-50 rounded flex items-center gap-1">
                <span>☰</span>
                <span>Filtros</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b">
            <button
              onClick={() => setActiveTab('physical')}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'physical'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Physical <span className="ml-1 px-2 py-0.5 bg-purple-600 text-white rounded-full text-xs">1</span>
            </button>
            <button
              onClick={() => setActiveTab('virtual')}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'virtual'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Virtual <span className="ml-1 text-gray-400">1</span>
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'additional'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Additional
            </button>
          </div>

          {/* Card List */}
          <div className="space-y-3">
            {activeTab === 'physical' && (
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    {cancelledCards.has('physical') ? (
                      <div className="text-red-600 font-bold">✗</div>
                    ) : (
                      <div className="text-green-600">✓</div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Physical</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-xs rounded">Debit</span>
                      </div>
                      <div className="text-xs text-gray-500">ID: 9426</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setExpandedCard(expandedCard === 'physical' ? null : 'physical')}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <svg className={`w-4 h-4 transition-transform ${expandedCard === 'physical' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedCard('physical')
                        setShowCancelModal(true)
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {expandedCard === 'physical' && (
                  <div className="mt-3 pt-3 border-t space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Card Number:</span>
                      <span className="font-mono">**** **** **** 9426</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expiry:</span>
                      <span>12/25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600">Active</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'virtual' && (
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    {cancelledCards.has('virtual') ? (
                      <div className="text-red-600 font-bold">✗</div>
                    ) : (
                      <div className="text-green-600">✓</div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Virtual</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-xs rounded">Debit</span>
                      </div>
                      <div className="text-xs text-gray-500">ID: 8523</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setExpandedCard(expandedCard === 'virtual' ? null : 'virtual')}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <svg className={`w-4 h-4 transition-transform ${expandedCard === 'virtual' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedCard('virtual')
                        setShowCancelModal(true)
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {expandedCard === 'virtual' && (
                  <div className="mt-3 pt-3 border-t space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Card Number:</span>
                      <span className="font-mono">**** **** **** 8523</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expiry:</span>
                      <span>11/26</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600">Active</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </WidgetWrapper>

      {/* Cancel Card Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Cancel this card</h2>
              <button onClick={() => {
                setShowCancelModal(false)
                setCancelReason('')
                setConfirmCode('')
              }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <label className="block text-sm font-medium mb-2">Select the cancelation reason</label>
            <select 
              className="w-full px-3 py-2 border rounded-md mb-4"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            >
              <option value="">Select a reason</option>
              <option value="lost">Lost card</option>
              <option value="stolen">Stolen card</option>
              <option value="damaged">Damaged card</option>
            </select>

            {cancelReason && (
              <>
                <div className="warning-box mb-4">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p>This action cannot be undone. Please confirm by entering the code.</p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Confirmation Code: {confirmationCode}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter confirmation code"
                    value={confirmCode}
                    onChange={(e) => setConfirmCode(e.target.value)}
                  />
                </div>
              </>
            )}

            <div className="flex gap-2 justify-end">
              <button 
                onClick={() => {
                  setShowCancelModal(false)
                  setCancelReason('')
                  setConfirmCode('')
                }}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleCancelCard}
                disabled={!cancelReason || confirmCode !== confirmationCode}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

