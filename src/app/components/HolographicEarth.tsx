import Spline from "@splinetool/react-spline/next";

export default function HolographicEarth() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/HYy8e6ftF3wyWMOk/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </main>
  );
}
