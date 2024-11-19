import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="h-full flex items-center justify-between px-6">
        {/* Search container that takes full width */}
        <div className="flex-1 max-w-[calc(100%-200px)]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        {/* Actions container with fixed width */}
        <div className="flex items-center gap-4 ml-4">
          <button className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[11px] text-white flex items-center justify-center">
              3
            </span>
            <Bell className="h-6 w-6" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
          />
        </div>
      </div>
    </header>
  );
}