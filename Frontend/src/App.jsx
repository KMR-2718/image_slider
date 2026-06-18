import ImageSlider from "./components/ImageSlider";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950 flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="flex justify-center overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
          <ImageSlider />
        </section>
      </div>
    </main>
  );
}