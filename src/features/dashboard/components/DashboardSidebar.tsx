import type { NavigationItemData } from '../../../types/dashboard'
import SectionLabel from '../../../components/ui/SectionLabel'

interface DashboardSidebarProps {
  navigationItems: NavigationItemData[]
}

interface NavigationIconProps {
  label: string
}

function NavigationIcon({ label }: NavigationIconProps) {
  const sharedProps = {
    'aria-hidden': true,
    className: 'navigation-icon',
    fill: 'none',
    viewBox: '0 0 18 18',
  }

  switch (label) {
    case 'Dashboard':
      return (
        <svg {...sharedProps}>
          <rect x="2.5" y="2.5" width="13" height="13" rx="3" fill="currentColor" opacity=".18" />
          <path d="M6 11.5V8m3 3.5V5.5m3 6V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'Food Order':
      return (
        <svg {...sharedProps}>
          <path d="M3 4h1.5l1.2 7.1h7.8L15 6H5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="7" cy="14" r="1" fill="currentColor" />
          <circle cx="13" cy="14" r="1" fill="currentColor" />
        </svg>
      )
    case 'Manage Menu':
      return (
        <svg {...sharedProps}>
          <rect x="4" y="2.5" width="10" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.5 6h5m-5 3h5m-5 3h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      )
    case 'Customer Review':
      return (
        <svg {...sharedProps}>
          <path d="M3 4.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-3.5 2v-2.1A2 2 0 0 1 3 10.5z" fill="currentColor" opacity=".2" />
          <circle cx="6.5" cy="7.5" r=".8" fill="currentColor" />
          <circle cx="9" cy="7.5" r=".8" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r=".8" fill="currentColor" />
        </svg>
      )
    case 'Settings':
      return (
        <svg {...sharedProps}>
          <path d="m9 2.5 1 .3.5 1.5 1.2.7 1.6-.2.8 1.4-.9 1.3v1.4l.9 1.3-.8 1.4-1.6-.2-1.2.7-.5 1.5-1 .3-1-.3-.5-1.5-1.2-.7-1.6.2-.8-1.4.9-1.3V7.5l-.9-1.3.8-1.4 1.6.2 1.2-.7.5-1.5z" fill="currentColor" opacity=".22" />
          <circle cx="9" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      )
    case 'Payment':
      return (
        <svg {...sharedProps}>
          <rect x="2.5" y="4" width="13" height="10" rx="2" fill="currentColor" opacity=".2" />
          <path d="M2.5 7h13m-3.5 3.5h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'Accounts':
      return (
        <svg {...sharedProps}>
          <circle cx="9" cy="6" r="2.5" fill="currentColor" opacity=".3" />
          <path d="M4 15c.5-2.3 2.2-3.5 5-3.5s4.5 1.2 5 3.5" fill="currentColor" />
        </svg>
      )
    default:
      return (
        <svg {...sharedProps}>
          <circle cx="9" cy="9" r="6.2" fill="currentColor" opacity=".2" />
          <path d="M9 8v4m0-6h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
  }
}

function NavigationGroup({
  items,
  activeLabel,
}: {
  items: NavigationItemData[]
  activeLabel?: string
}) {
  return (
    <ul className="sidebar-navigation-list">
      {items.map((item) => {
        const isActive = item.label === activeLabel

        return (
          <li key={item.label}>
            <button
              aria-current={isActive ? 'page' : undefined}
              className={`sidebar-navigation-item${isActive ? ' is-active' : ''}`}
              type="button"
            >
              <NavigationIcon label={item.label} />
              <span>{item.label}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

function DashboardSidebar({ navigationItems }: DashboardSidebarProps) {
  const menuItems = navigationItems.slice(0, 4)
  const otherItems = navigationItems.slice(4)

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        <span aria-hidden="true" className="sidebar-brand__mark">G</span>
        <span className="sidebar-brand__name">GOODFOOD</span>
      </div>
      <nav aria-label="Main navigation" className="sidebar-navigation">
        <div className="sidebar-navigation-group">
          <SectionLabel>MENU</SectionLabel>
          <NavigationGroup items={menuItems} activeLabel="Dashboard" />
        </div>
        <div className="sidebar-navigation-group">
          <SectionLabel>OTHERS</SectionLabel>
          <NavigationGroup items={otherItems} />
        </div>
      </nav>
    </aside>
  )
}

export default DashboardSidebar
