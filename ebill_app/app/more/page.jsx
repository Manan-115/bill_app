'use client';

import ActionButtonsBar from '@/components/actions/ActionButtonsBar';
import TopNavBar from '@/components/navigation/TopNavBar';

export default function MorePage() {
  return (
    <div className="screen">
      <TopNavBar variant="more" />
      <div className="empty-state">
        <p>More options will show here.</p>
        <p>Coming soon.</p>
      </div>
      <ActionButtonsBar variant="more" />
    </div>
  );
}
