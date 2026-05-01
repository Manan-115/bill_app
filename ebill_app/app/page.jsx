"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ActionButtonsBar from '@/components/actions/ActionButtonsBar';
import TopNavBar from '@/components/navigation/TopNavBar';
import DashboardDrawer from '@/components/ui/DashboardDrawer';

export default function Home() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = [
    'View unlimited reports',
    'Recover Deleted Invoices',
    'Backup your data now'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
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

  return (
    <div className="screen">
      <TopNavBar variant="dashboard" />

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
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2L15 8L21 9L16.5 13.5L17.5 19.5L12 16.5L6.5 19.5L7.5 13.5L3 9L9 8L12 2Z" />
          </svg>
        </span>
        <span className="recover-text" key={currentMessageIndex}>
          {messages[currentMessageIndex]}
        </span>
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

      <ActionButtonsBar
        variant="dashboard"
        onAction={(key) => {
          if (key === 'add') setDrawerOpen(true);
          if (key === 'received') router.push('/payments/receive');
        }}
      />

      <DashboardDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </div>
  );
}