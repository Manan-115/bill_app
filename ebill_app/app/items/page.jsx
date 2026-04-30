'use client';

import ActionButtonsBar from '@/components/actions/ActionButtonsBar';
import TopNavBar from '@/components/navigation/TopNavBar';

export default function ItemsPage() {
  return (
    <div className="screen">
      <TopNavBar variant="items" />
      <div className="empty-state">
        <p>No items yet.</p>
        <p>Coming soon.</p>
      </div>
      <ActionButtonsBar variant="items" />
    </div>
  );
}
