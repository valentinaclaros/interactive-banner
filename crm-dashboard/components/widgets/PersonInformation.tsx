'use client'

import WidgetWrapper from '../WidgetWrapper'

export default function PersonInformation() {
  return (
    <WidgetWrapper 
      title="Person Information" 
      minHeight="min-h-full"
      footerSource="General"
      icon={
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        </svg>
      }
    >
      <div className="space-y-4">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-purple-200 rounded-lg flex items-center justify-center">
            <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Preferred Name */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Preferred Name</label>
          <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
            María (María Macedo Florez)
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            </svg>
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Email</label>
          <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
            mariamacedo@gmail.com
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </p>
        </div>

        {/* Printed Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Printed Name</label>
            <p className="text-sm font-medium text-gray-900">MARÍA MACEDO</p>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Tax ID</label>
            <p className="text-sm font-medium text-gray-900">CC-1234567890</p>
          </div>
        </div>

        {/* Birthdate */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Birthdate</label>
          <p className="text-sm font-medium text-gray-900">01/01/2007</p>
        </div>

        {/* Marital Status */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Marital Status</label>
          <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>None</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
          </select>
        </div>

        {/* Shipping Address */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Shipping Address</label>
          <div className="info-box mt-1">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-medium">This may not be the address for ongoing deliveries. Please check the "Shipping Info" widget to confirm.</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-2">Calle 123 #43-34, Leticia, AM, Colombia</p>
        </div>

        {/* Billing Address */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Billing Address</label>
          <p className="text-sm text-gray-700">Calle 123 #43-34, Leticia, AM, Colombia</p>
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Phone Number</label>
          <p className="text-sm text-gray-700">(57) 33333-3333 3</p>
        </div>

        {/* User Agent */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">User Agent</label>
          <p className="text-xs text-gray-600 break-all">Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
        </div>

        {/* Channel */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Channel</label>
          <p className="text-sm text-gray-700">Mobile App</p>
        </div>

        {/* Additional IDs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Customer ID</label>
            <p className="text-sm text-gray-700">12345</p>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Prospect ID</label>
            <p className="text-sm text-gray-700">PRO-12345</p>
          </div>
        </div>

        {/* Shard */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Shard</label>
          <p className="text-sm text-gray-700">shard-01</p>
        </div>
      </div>
    </WidgetWrapper>
  )
}

