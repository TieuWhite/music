import useMusicPlayer from "../hooks/usePlayerProvider";

export default function Header() {
  const { currentTrackName } = useMusicPlayer();

  return (
    <div className="header">
      <marquee>{currentTrackName}</marquee>
    </div>
  );
}
