export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-sm font-semibold tracking-widest uppercase text-gold-500">
              Amartya Finance Society
            </h1>
            <h2 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Resource Bank
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The central repository for finance, economics, markets, investing, research, 
              quantitative finance, and career preparation resources.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm hover:bg-gold-600 transition-colors">
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-bold tracking-tight text-white">Resources</h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* PDFs Card */}
            <div className="rounded-xl border border-navy-600 bg-navy-800 p-8 hover:border-gold-500 transition-colors">
              <div className="text-4xl mb-4">📄</div>
              <h4 className="text-xl font-semibold text-white">PDFs</h4>
              <p className="mt-2 text-sm text-gray-400">
                Books, research reports, notes, study material, casebooks, and interview guides
              </p>
              <div className="mt-6 flex gap-2">
                <span className="text-xs bg-navy-700 px-2 py-1 rounded text-gray-300">16 items</span>
              </div>
            </div>

            {/* Videos Card */}
            <div className="rounded-xl border border-navy-600 bg-navy-800 p-8 hover:border-gold-500 transition-colors">
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="text-xl font-semibold text-white">Videos</h4>
              <p className="mt-2 text-sm text-gray-400">
                Lecture series, workshops, finance bootcamps, and market education content
              </p>
              <div className="mt-6 flex gap-2">
                <span className="text-xs bg-navy-700 px-2 py-1 rounded text-gray-300">Coming soon</span>
              </div>
            </div>

            {/* Links Card */}
            <div className="rounded-xl border border-navy-600 bg-navy-800 p-8 hover:border-gold-500 transition-colors">
              <div className="text-4xl mb-4">🔗</div>
              <h4 className="text-xl font-semibold text-white">Useful Links</h4>
              <p className="mt-2 text-sm text-gray-400">
                Financial tools, research platforms, news sources, and industry resources
              </p>
              <div className="mt-6 flex gap-2">
                <span className="text-xs bg-navy-700 px-2 py-1 rounded text-gray-300">Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
