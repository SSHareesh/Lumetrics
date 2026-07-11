import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-paper">
      <div className="text-center px-6">
        <p className="font-mono text-sm text-teal">404</p>
        <h1 className="mt-4 font-display text-3xl text-ink">This page didn't make it into the dataset.</h1>
        <p className="mt-3 text-ink-soft max-w-sm mx-auto">
          The page you're looking for may have moved. Let's get you back to solid ground.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
