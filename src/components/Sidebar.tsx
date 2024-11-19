import { Disclosure } from '@headlessui/react';
import { ChevronRight } from 'lucide-react';
import { Home, Users, FolderKanban, Calendar, FileText, BarChart3 } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '#', current: true },
  {
    name: 'Teams',
    icon: Users,
    current: false,
    children: [
      { name: 'Engineering', href: '#' },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: FolderKanban,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#' },
      { name: 'iOS App', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'New Customer Portal', href: '#' },
    ],
  },
  { name: 'Calendar', icon: Calendar, href: '#', current: false },
  { name: 'Documents', icon: FileText, href: '#', current: false },
  { name: 'Reports', icon: BarChart3, href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface SidebarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
}

export default function Sidebar({ activeItem, onItemSelect }: SidebarProps) {
  return (
    <div className="flex h-full flex-col bg-white w-60 fixed left-0 top-0">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-200">
        <div className="h-8 w-8 rounded bg-indigo-600"></div>
        <span className="ml-3 text-xl font-semibold text-gray-900">Workflow</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-6 py-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      onClick={() => onItemSelect(item.name)}
                      className={classNames(
                        item.name === activeItem ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold'
                      )}
                    >
                      {item.icon && <item.icon className="h-5 w-5 shrink-0" />}
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div" defaultOpen={item.name === activeItem}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                              'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold text-gray-700'
                            )}
                          >
                            <ChevronRight
                              className={classNames(
                                open ? 'rotate-90' : '',
                                'h-5 w-5 shrink-0 text-gray-400 transition-transform duration-150'
                              )}
                            />
                            {item.icon && <item.icon className="h-5 w-5 shrink-0" />}
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => onItemSelect(subItem.name)}
                                className={classNames(
                                  subItem.name === activeItem ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                                  'block rounded-md py-2 pl-9 pr-2 text-sm'
                                )}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
                className="h-8 w-8 rounded-full bg-gray-50"
              />
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}