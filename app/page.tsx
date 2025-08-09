import Link from "next/link";
import Image from "next/image";
import { allCaseStudies } from "contentlayer/generated";
import profile from "@/data/profile";
import { testimonials } from "@/data/testimonials";
import { brands } from "@/data/brands";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export default function HomePage() {
  const allWork = allCaseStudies.sort((a, b) => b.year - a.year);
  return (
    <div className="space-y-14 py-10">
      <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{profile.name}</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">{profile.title}</p>
          <p className="max-w-prose text-neutral-600 dark:text-neutral-300">{profile.bio}</p>
          <div className="flex gap-3">
            <Link
              href="/work"
              className="rounded-md bg-neutral-900 px-4 py-2 text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View Work
            </Link>
            <a
              href={profile.resumeUrl}
              className="rounded-md border border-neutral-300 px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              Download Résumé
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <span>{profile.location}</span>
            <span aria-hidden="true">•</span>
            <a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <div className="relative h-56 overflow-hidden rounded-lg border border-neutral-200 md:col-span-5 md:h-72 dark:border-neutral-800">
          <Image src="/images/headshot.svg" alt="Portrait of Avery Lee" fill className="object-cover" />
        </div>
      </section>

      <section aria-labelledby="work">
        <h2 id="work" className="mb-6 text-lg font-semibold">Work</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allWork.map((item, index) => (
            <article key={item._id} className="group space-y-4">
              <Link href={item.url as any} className="relative aspect-[4/3] block overflow-hidden rounded-lg">
                <Image
                  src={item.heroImage}
                  alt={`${item.title} hero image`}
                  fill
                  className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                />
              </Link>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold leading-tight">
                  <Link href={item.url as any} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.subtitle}</p>
                {item.impact && item.impact.length > 0 && (
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.impact[0]}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

                <section aria-labelledby="brands">
            <h2 id="brands" className="mb-6 text-lg font-semibold">Brands I've worked with</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-800">
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      width={24}
                      height={24}
                      className={`h-6 w-6 object-contain ${
                        ['OpenAI', 'Apple', 'Notion'].includes(brand.name)
                          ? 'dark:invert dark:brightness-0 dark:contrast-100'
                          : ''
                      }`}
                    />
                  </div>
                  <span className="text-xs text-neutral-600 dark:text-neutral-400">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

      <section aria-labelledby="testimonials">
        <h2 id="testimonials" className="mb-6 text-lg font-semibold">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
              <blockquote className="text-neutral-700 dark:text-neutral-200">
                "{testimonial.quote}"
              </blockquote>
              <footer className="mt-4">
                <div className="font-medium text-neutral-900 dark:text-white">{testimonial.author}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {testimonial.role}, {testimonial.company}
                </div>
              </footer>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
