import TopNavBar from '@/components/navigation/TopNavBar';

export default function ForYouPage() {
  return (
    <div className="screen">
      <TopNavBar variant="forYou" />
      <div className="empty-state">
        <p>No recommendations yet.</p>
        <p>Coming soon.</p>
      </div>
    </div>
  );
}
