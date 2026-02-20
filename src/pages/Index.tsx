import UrgencyBar from '@/components/UrgencyBar';
import VideoSection from '@/components/VideoSection';
import CTAButton from '@/components/CTAButton';
import ViewerCount from '@/components/ViewerCount';
import CommentsSection from '@/components/CommentsSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <VideoSection />
      <CTAButton />
      <ViewerCount />
      <CommentsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
