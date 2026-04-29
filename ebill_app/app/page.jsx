export default function Home() {
  const metrics = [
    { value: '₹ 0', label: 'To Collect', tone: 'collect', trend: 'down' },
    { value: '₹ 0', label: 'To Pay', tone: 'pay', trend: 'up' },
  ];

  const tiles = [
    { title: 'Stock Value', subtitle: 'Value of Items' },
    { title: '₹ 0', subtitle: "This week's sale", emphasis: true },
    { title: 'Total Balance', subtitle: 'Cash + Bank Balance' },
    { title: 'Reports', subtitle: 'Sales, Party, GST...' },
  ];

  const navItems = [
    {
      label: 'Dashboard',
      active: true,
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 11.5L12 4l8 7.5" />
          <path d="M6.5 10.5V20h11V10.5" />
        </svg>
      ),
    },
    {
      label: 'Parties',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="9" r="3" />
          <path d="M5 20c1.6-3.2 12.4-3.2 14 0" />
        </svg>
      ),
    },
    {
      label: 'Items',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.6" />
          <rect x="13" y="4" width="7" height="7" rx="1.6" />
          <rect x="4" y="13" width="7" height="7" rx="1.6" />
        </svg>
      ),
    },
    {
      label: 'For You',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9z" />
        </svg>
      ),
    },
    {
      label: 'More',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="icon-fill" cx="6" cy="12" r="1.6" />
          <circle className="icon-fill" cx="12" cy="12" r="1.6" />
          <circle className="icon-fill" cx="18" cy="12" r="1.6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="screen">
      <header className="top-bar">
        <button className="business" type="button">
          <span className="business-name">Business Name</span>
          <span className="caret">v</span>
        </button>
        <div className="top-actions">
          <button className="icon-button" type="button" aria-label="Calculator">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="3" width="16" height="18" rx="3" />
              <rect x="7" y="6" width="10" height="3" rx="1" />
              <circle className="icon-fill" cx="8.5" cy="13" r="1" />
              <circle className="icon-fill" cx="12" cy="13" r="1" />
              <circle className="icon-fill" cx="15.5" cy="13" r="1" />
              <circle className="icon-fill" cx="8.5" cy="17" r="1" />
              <circle className="icon-fill" cx="12" cy="17" r="1" />
              <circle className="icon-fill" cx="15.5" cy="17" r="1" />
            </svg>
          </button>
          <button className="icon-button" type="button" aria-label="Offers">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="8" width="16" height="12" rx="2" />
              <path d="M4 12h16" />
              <path d="M12 8v12" />
              <path d="M7 8c0-2.2 2.2-3.8 5-1.3" />
              <path d="M17 8c0-2.2-2.2-3.8-5-1.3" />
            </svg>
          </button>
          <button className="icon-button" type="button" aria-label="Desktop view">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="12" rx="2" />
              <path d="M8 19h8" />
              <path d="M12 17v2" />
            </svg>
          </button>
        </div>
      </header>

      <section className="metrics-grid">
        {metrics.map((metric) => (
          <article className={`metric-card ${metric.tone}`} key={metric.label}>
            <div>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-sub">
                {metric.label}
                <span className={`trend ${metric.trend}`}>
                  <svg className="trend-icon" viewBox="0 0 16 16" aria-hidden="true">
                    <path d={metric.trend === 'down' ? 'M8 3v9M4.5 9.5L8 13l3.5-3.5' : 'M8 13V4M4.5 6.5L8 3l3.5 3.5'} />
                  </svg>
                </span>
              </p>
            </div>
            <span className="card-arrow">&gt;</span>
          </article>
        ))}
      </section>

      <section className="tile-grid">
        {tiles.map((tile) => (
          <article className="tile-card" key={tile.title}>
            <div>
              <p className={`tile-title ${tile.emphasis ? 'tile-value' : ''}`}>{tile.title}</p>
              <p className="tile-sub">{tile.subtitle}</p>
            </div>
            <span className="card-arrow">&gt;</span>
          </article>
        ))}
      </section>

      <button className="recover-row" type="button">
        <span className="recover-icon" aria-hidden="true">
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 8l4 3 4-6 4 6 4-3" />
            <path d="M5 10l2 9h10l2-9" />
          </svg>
        </span>
        <span className="recover-text">Recover Deleted Invoices</span>
        <span className="card-arrow">&gt;</span>
      </button>

      <section className="transactions">
        <div className="transactions-header">
          <span className="section-title">Transactions</span>
          <button className="filter-pill" type="button">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="3" />
              <path d="M8 3v4M16 3v4M3 10h18" />
            </svg>
            <span>LAST 365 DAYS</span>
          </button>
        </div>
        <div className="empty-state">
          <svg className="empty-icon" viewBox="0 0 64 64" aria-hidden="true">
            <rect x="10" y="14" width="44" height="38" rx="6" />
            <path d="M18 10v8M46 10v8M10 26h44" />
            <circle className="icon-fill" cx="24" cy="36" r="2" />
            <circle className="icon-fill" cx="32" cy="36" r="2" />
            <circle className="icon-fill" cx="40" cy="36" r="2" />
          </svg>
          <p>No Transactions Found</p>
        </div>
      </section>

      <div className="action-bar">
        <button className="action-button dark" type="button">Received Payment</button>
        <button className="action-button plus" type="button" aria-label="Add">+</button>
        <button className="action-button purple" type="button">+ Bill / Invoice</button>
      </div>

      <nav className="bottom-nav" aria-label="Bottom navigation">
        {navItems.map((item) => (
          <button
            className={`nav-item ${item.active ? 'active' : ''}`}
            type="button"
            key={item.label}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}