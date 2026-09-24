import { MonitorPlay } from 'lucide-react';

interface SpotifyBannerProps {
  onConnect?: () => void;
}

export function SpotifyBanner({ onConnect }: SpotifyBannerProps) {
  const handleConnect = () => {
    if (onConnect) {
      onConnect();
    } else {
      alert('Spotify Sync Activated! We will notify you when your favorite artists schedule matches or tour dates.');
    }
  };

  return (
    <section className="px-4 sm:px-6 mb-24 sm:mb-32 max-w-[1440px] mx-auto relative z-10">
      <div className="bg-gradient-to-br from-white to-secondary-ice shadow-[0_20px_40px_rgba(27,58,107,0.06)] border border-secondary-light/60 rounded-[2.5rem] p-6 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="flex -space-x-4 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
              alt="Fan avatar 1"
              className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-4 border-white object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
              alt="Fan avatar 2"
              className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-4 border-white object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Fan avatar 3"
              className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-4 border-white object-cover shadow-sm z-10"
            />
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center font-bold text-xs z-20 shadow-sm">
              <MonitorPlay className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
          </div>
          <div>
            <h3 className="font-black text-2xl sm:text-3xl text-primary mb-1 font-display uppercase">
              Connect to Spotify
            </h3>
            <p className="text-primary/70 text-base sm:text-lg font-medium">
              Be the first to know when your favorite artists announce stadium tours.
            </p>
          </div>
        </div>
        <button
          onClick={handleConnect}
          className="w-full md:w-auto bg-secondary text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-black text-base uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-secondary-hover transition-all shrink-0 shadow-[0_8px_20px_rgba(90,167,255,0.25)] hover:shadow-[0_12px_25px_rgba(90,167,255,0.4)] hover:-translate-y-0.5 cursor-pointer"
        >
          <MonitorPlay className="w-5 h-5" /> Connect Now
        </button>
      </div>
    </section>
  );
}
