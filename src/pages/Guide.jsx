import { Link, useParams } from "react-router-dom";
import { emergencies } from "../data/emergencies";

function Guide() {
  const { id } = useParams();
  const emergency = emergencies.find((item) => item.id === id);

  if (!emergency) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">Guide not found</h1>
          <p className="mt-2 text-slate-600">
            We could not find the emergency guide you requested.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Link
          to="/"
          className="mb-6 inline-block text-sm font-semibold text-red-600 hover:text-red-700"
        >
          ← Back to Home
        </Link>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-4 text-6xl">{emergency.emoji}</div>
          <h1 className="text-4xl font-bold text-slate-800">{emergency.title}</h1>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
            {emergency.shortDescription}
          </p>

          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
            <h2 className="text-lg font-bold text-red-700">Important</h2>
            <p className="mt-2 text-sm leading-7 text-red-900">
              Follow these steps calmly and seek professional medical help immediately
              if the condition becomes severe or life-threatening.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {emergency.steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${emergency.emergencyNumber}`}
              className="inline-block rounded-xl bg-red-600 px-6 py-3 text-center font-semibold text-white hover:bg-red-700"
            >
              Call Emergency ({emergency.emergencyNumber})
            </a>

            <Link
              to="/"
              className="inline-block rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
            >
              Choose Another Emergency
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Guide;