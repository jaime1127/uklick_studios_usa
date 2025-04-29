export default function Video() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="vidCamera.mp4" type="video/mp4" />
    </video>
  );
}
