"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSnapScroll } from "@/lib/useSnapScroll";
import ActionButtonsBar from "@/components/actions/ActionButtonsBar";
import TopNavBar from "@/components/navigation/TopNavBar";
import DashboardDrawer from "@/components/ui/DashboardDrawer";

export default function Home() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const { scrollY, springScrollY } = useSnapScroll({
    threshold: 80,
    expandedValue: 0,
    collapsedValue: 160
  });

  // Smoothing the scroll-linked values using springScrollY for snap-to-state
  const navOpacity = useTransform(springScrollY, [0, 50], [1, 0]);
  const navY = useTransform(springScrollY, [0, 50], [0, -20]);
  
  const searchOpacity = useTransform(springScrollY, [20, 80], [0, 1]);
  const searchY = useTransform(springScrollY, [20, 80], [-20, 0]);
  const searchHeight = useTransform(springScrollY, [0, 80], [0, 45]);
  const searchX = useTransform(scrollY, [20, 80], [35, 0]);   // starts center-right, slides left
  const sortX = useTransform(scrollY, [20, 80], [-130, 0]);   // starts center-left, slides right
  const searchScaleX = useTransform(springScrollY, [20, 80], [0.1, 1]);
  const sortScaleX = useTransform(springScrollY, [20, 80], [0.1, 1]);

  const dateOpacity = useTransform(springScrollY, [60, 120], [0, 1]);
  const dateY = useTransform(springScrollY, [60, 120], [-10, 10]);
  const dateHeight = useTransform(springScrollY, [50, 120], [0, 62]);

  const columnMarginTop = useTransform(scrollY, [0, 60], [0, -70]);
  const filterOpacity = useTransform(springScrollY, [100, 160], [0, 1]);
  const filterY = useTransform(springScrollY, [100, 160], [-10, 0]);
  const filterHeight = useTransform(springScrollY, [90, 160], [0, 60]);

  const headerHeight = useTransform(springScrollY, [0, 160], [80, 240], { clamp: true });

  const metricsOpacity = useTransform(springScrollY, [0, 80], [1, 0]);
  const metricsScale = useTransform(springScrollY, [0, 80], [1, 0.9]);
  
  const transactionsMarginTopInput = [0, 160];
  const transactionsMarginTopOutput = [4, -320];
  const transactionsMarginTop = useTransform(springScrollY, transactionsMarginTopInput, transactionsMarginTopOutput, { clamp: true });

  const messages = [
    "View unlimited reports",
    "Recover Deleted Invoices",
    "Backup your data now"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const metrics = [
    { value: "? 0", label: "To Collect", tone: "collect", trend: "down" },
    { value: "? 0", label: "To Pay", tone: "pay", trend: "up" },
  ];

  const tiles = [
    { title: "Stock Value", subtitle: "Value of Items" },
    { title: "? 0", subtitle: "This week\u0027s sale", emphasis: true },
    { title: "Total Balance", subtitle: "Cash + Bank Balance" },
    { title: "Reports", subtitle: "Sales, Party, GST..." },
  ];

  return (
    <div className="screen bg-white">
      <motion.div
        className="sticky top-0 z-50 bg-white -mx-[18px] px-[18px] pt-4 overflow-hidden touch-none pointer-events-none"
        style={{ height: headerHeight }}
      >
        <motion.div
          style={{
            opacity: navOpacity,
            y: navY,
            pointerEvents: useTransform(scrollY, s => s > 40 ? "none" : "auto")
          }}
        >
          <TopNavBar variant="dashboard" />
        </motion.div>

<motion.div 
  className="flex flex-col pointer-events-auto"
  style={{ marginTop: columnMarginTop }}
>
          {/* Search and Sort Row */}
          <motion.div
            style={{
              opacity: searchOpacity,
              y: searchY,
              height: searchHeight,
              marginTop: useTransform(scrollY, [0, 80], [0, 8])
            }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                style={{ x: searchX }}
                className="flex-1 relative"
              >

                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
                <input
                  type="text"
                  placeholder="Search party or invoice no."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm shadow-sm focus:outline-none focus:border-purple-500"
                />
              </motion.div>
              <motion.button
                style={{ x: sortX }}
                className="flex items-center gap-2 px-3 py-2 bg-[#2e2b4b] text-white rounded-lg text-sm font-semibold whitespace-nowrap shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="13" y1="14" x2="3" y2="14"></line><line x1="9" y1="18" x2="3" y2="18"></line></svg>
                SORT
              </motion.button>
            </div>
          </motion.div>

          {/* Filter Chips Row */}
          <motion.div
            style={{
              opacity: filterOpacity,
              y: filterY,
              height: filterHeight
            }}
            className="overflow-hidden"
          >
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 mb-2">
              {["All", "Sales", "Received Payment", "Sales Return"].map((filter, i) => (
                <button
                  key={filter}
                  style={{ borderWidth: '1.5px', borderStyle: 'solid' }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm ${i === 0
                    ? "bg-[#f1edff] border-[#5a49e5] text-[#5a49e5]"
                    : "bg-white border-gray-200 text-gray-600"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Date Picker Row */}
          <motion.div
            style={{
              opacity: dateOpacity,
              y: dateY,
              height: dateHeight
            }}
            className="overflow-hidden"
          >
            <div className="flex items-center justify-between p-2.5 bg-white border border-gray-200 rounded-lg shadow-sm mb-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>Last 365 Days</span>
                <span className="text-xs font-normal text-gray-400">04 May 2025 - 04 May 2026</span>
              </div>
              <button className="text-sm font-bold text-[#5a49e5] uppercase">Change</button>
            </div>
          </motion.div>


</motion.div>
      </motion.div>

      <motion.div
        style={{
          opacity: metricsOpacity,
          scale: metricsScale,
        }}
      >
        <section className="metrics-grid">
          {metrics.map((metric) => (
            <article className={`metric-card ${metric.tone}`} key={metric.label}>
              <div>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-sub">
                  {metric.label}
                  <span className={`trend ${metric.trend}`}>
                    <svg className="trend-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d={metric.trend === "down" ? "M8 3v9M4.5 9.5L8 13l3.5-3.5" : "M8 13V4M4.5 6.5L8 3l3.5 3.5"} />
                    </svg>
                  </span>
                </p>
              </div>
              <span className="card-arrow">&gt;</span>
            </article>
          ))}
        </section>

        <section className="tile-grid mt-4">
          {tiles.map((tile) => (
            <article className="tile-card" key={tile.title}>
              <div>
                <p className={`tile-title ${tile.emphasis ? "tile-value" : ""}`}>{tile.title}</p>
                <p className="tile-sub">{tile.subtitle}</p>
              </div>
              <span className="card-arrow">&gt;</span>
            </article>
          ))}
        </section>

        <button className="recover-row mt-4" type="button">
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
      </motion.div>

      <motion.section
        className="transactions bg-white -mx-[18px] px-[18px] pt-4 rounded-t-3xl min-h-[70vh] shadow-[0_-8px_30px_rgba(0,0,0,0.08)] relative z-10"
        style={{
          marginTop: transactionsMarginTop,
          paddingBottom: "150px"
        }}
      >
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
      </motion.section>

      <ActionButtonsBar
        variant="dashboard"
        onAction={(key) => {
          if (key === "add") setDrawerOpen(true);
          if (key === "received") router.push("/payments/receive?key=received");
          if (key === "bill") router.push("/create-bill?key=bill");
        }}
      />

      <DashboardDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </div>
  );
} 
