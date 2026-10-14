const stats = [
  { label: 'Farmers onboarded', value: '12.4K' },
  { label: 'Active buyers', value: '4.8K' },
  { label: 'Products listed', value: '28.6K' },
  { label: 'Avg. enquiry response', value: '2.1 hrs' }
];

const products = [
  { name: 'Cotton', price: '₹7,150 / quintal', location: 'Bellary, Karnataka' },
  { name: 'Maize', price: '₹2,400 / quintal', location: 'Nagpur, Maharashtra' },
  { name: 'Groundnut', price: '₹5,680 / quintal', location: 'Anantapur, Andhra Pradesh' },
  { name: 'Paddy', price: '₹2,120 / quintal', location: 'Tirupati, Andhra Pradesh' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-slate-800">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-green-200 bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white">A</div>
            <div>
              <p className="text-lg font-bold text-brand-green">Agri Marketplace</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#products" className="hover:text-brand-green">Products</a>
            <a href="#how-it-works" className="hover:text-brand-green">How it works</a>
            <a href="#pricing" className="hover:text-brand-green">Pricing</a>
            <button className="rounded-full bg-brand-green px-4 py-2 text-white transition hover:bg-green-700">Get Started</button>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Trusted marketplace</span>
          <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            Connect farmers and buyers with confidence.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600">
            Agrimatex helps farmers list produce, buyers discover verified demand, and traders negotiate directly with transparent pricing and secure in-app communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700">List my produce</button>
            <button className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-green-200 hover:text-brand-green">Explore marketplace</button>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-green-100 bg-white p-4 shadow-soft">
                <div className="text-2xl font-black text-brand-green">{item.value}</div>
                <div className="mt-1 text-xs text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-soft">
          <div className="rounded-2xl bg-brand-light p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Market snapshot</h2>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">Live</span>
            </div>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.name} className="rounded-2xl border border-green-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-slate-900">{product.name}</p>
                      <p className="text-sm text-slate-500">{product.location}</p>
                    </div>
                    <span className="rounded-full bg-brand-light px-2 py-1 text-xs font-semibold text-brand-green">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Featured categories</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Agricultural products driving trade</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {['Cotton', 'Maize', 'Wheat', 'Groundnut', 'Paddy', 'Vegetables', 'Pulses', 'Fruits'].map((category) => (
            <div key={category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-brand-green">{category.slice(0, 1)}</div>
              <h3 className="text-xl font-bold text-slate-900">{category}</h3>
              <p className="mt-3 text-sm text-slate-500">High-quality listings from trusted farmers and regional sellers.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">How it works</p>
            <h2 className="mt-3 text-3xl font-black">Simple marketplace flow</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: '1. Create listing', text: 'Farmers list produce with grade, quantity, moisture, quality, and availability date.' },
              { title: '2. Receive enquiries', text: 'Buyers submit enquiries and negotiate directly on the platform.' },
              { title: '3. Confirm agreement', text: 'Both parties review terms, confirm the final agreement, and track transaction history.' }
            ].map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
