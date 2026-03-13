import { PricingTable } from '@clerk/nextjs';

export default function SubscriptionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdf6ec] via-white to-white py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Choose Your Plan
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Upgrade to unlock more books, longer sessions, and advanced features.
        </p>
      </div>

      <div className="mt-12 px-4">
        <div className="mx-auto max-w-6xl clerk-pricing-container">
          <PricingTable />
        </div>
      </div>
    </main>
  );
}