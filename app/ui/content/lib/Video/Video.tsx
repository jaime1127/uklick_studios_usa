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
      {/* <img
        className="absolute md:w-3/4 lg:w-1/2"
        loading="lazy"
        src="images/logo/infamous.png"
        alt="logo overlay"
      /> */}
    </section>
  );
}
