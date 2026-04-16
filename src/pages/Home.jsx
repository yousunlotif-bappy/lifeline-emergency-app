import { Link } from "react-router-dom";
import { emergencies } from "../data/emergencies";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-red-600 text-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">LifeLine</h1>
          <p className="text-sm font-medium text-red-100">
            Emergency Response Assistant
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10 rounded-3xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-12 text-white shadow-lg">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
            Fast emergency help
          </p>
          <h2 className="mb-4 max-w-3xl text-4xl font-bold leading-tight">
            Get quick first-aid guidance when every second matters.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-red-50">
            LifeLine helps people respond quickly during emergencies with
            clear first-aid steps, easy access to guidance, and a simple
            experience designed for stressful moments.
          </p>
        </section>

        <section>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-800">
              Choose an emergency type
            </h3>
            <p className="mt-2 text-slate-600">
              Select a situation to get simple step-by-step guidance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {emergencies.map((item) => (
              <Link
                key={item.id}
                to={`/guide/${item.id}`}
                className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{item.emoji}</div>
                <h2 className="text-2xl font-bold text-slate-800">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.shortDescription}
                </p>
                <div className="mt-5 text-sm font-semibold text-red-600">
                  View emergency guide →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;