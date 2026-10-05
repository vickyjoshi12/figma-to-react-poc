function DashboardTopBar() {
  return (
    <header className="dashboard-topbar">
      <label className="dashboard-search">
        <span className="visually-hidden">Search</span>
        <input placeholder="Search" type="search" />
        <svg aria-hidden="true" className="dashboard-search__icon" fill="none" viewBox="0 0 18 18">
          <circle cx="7.8" cy="7.8" r="4.8" stroke="currentColor" strokeWidth="1.3" />
          <path d="m11.3 11.3 3.2 3.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </label>
      <div className="topbar-controls">
        <div aria-label="Current account: Delicious Burger" className="account-control" role="group">
          <span aria-hidden="true" className="account-control__avatar">🍔</span>
          <span className="account-control__name">Delicious Burger</span>
          <svg aria-hidden="true" className="account-control__chevron" fill="none" viewBox="0 0 20 20">
            <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <button aria-label="Notifications" className="notification-button" type="button">
          <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path d="M5 13.5h10l-1.3-1.8V8.5a3.7 3.7 0 0 0-7.4 0v3.2z" fill="currentColor" opacity=".65" />
            <path d="M8 15a2.1 2.1 0 0 0 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span aria-hidden="true" className="notification-button__dot" />
        </button>
      </div>
    </header>
  )
}

export default DashboardTopBar
