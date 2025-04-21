export default async function Video() {
  return (
    <section className="flex items-center justify-center min-h-lvh">
      <video
        className="absolute top-0 left-0 w-full h-full min-h-lvh object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="vidCamera.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
