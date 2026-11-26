import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 font-display text-5xl font-bold uppercase text-navy-900">Page not found</h1>
      <p className="mt-4 text-steel-500">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-block rounded-sm bg-orange-500 px-6 py-3 font-semibold text-white">
        Back to Home
      </Link>
    </section>
  );
}
