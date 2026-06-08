export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            UniHub
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            A simple starting point for managing university work.
          </h1>

          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            This frontend is now ready for testing, Tailwind, and shadcn/ui. The
            next steps are authentication, modules, and assignments.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Get started
            </button>

            <a
              href="#learn-more"
              className="rounded-md border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
