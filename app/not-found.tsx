import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto my-24 max-w-xl text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        The page you’re looking for doesn’t exist. Try browsing all work.
      </p>
      <div className="mt-6">
        <Link href="/work" className="rounded-md border px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900">
          View all work
        </Link>
      </div>
    </section>
  );
}

