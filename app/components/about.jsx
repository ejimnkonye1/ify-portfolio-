
export default function About() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          Hello! 👋 I&apos;m Ify
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          A dedicated Virtual Assistant helping individuals and businesses stay
          organized and productive. Whether you need assistance with scheduling,
          research, or customer support, I&lsquo;m here to streamline your workflow.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Hire Me
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            My Works
          </button>
        </div>
      </div>
    </section>
  );
}
