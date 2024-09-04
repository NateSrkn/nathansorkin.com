import { client } from "@/sanity/lib/client";
import { ABOUT_QUERY, CURRENT_ROLE_QUERY } from "@/sanity/lib/queries";
import { Link } from "@/components/Link";
import { Image } from "@/components/Image";
import { PortableText } from "@/components/PortableText";

import { TopTracks } from "@/app/(main)/about/components/TopTracks";

import { CurrentlyReading } from "@/app/(main)/about/components/CurrentlyReading";
import { FavoriteBooks } from "@/app/(main)/about/components/FavoriteBooks";

export default async function AboutPage() {
  const about = await client.fetch(ABOUT_QUERY);
  const currentRole = await client.fetch(CURRENT_ROLE_QUERY);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 root">
      <header className="text-blue-200">
        <Link href="/">
          <h1 className="text-xl font-semibold tracking-wide">Nathan Sorkin</h1>
        </Link>
        <div className="text-blue-200">
          {currentRole?.job_title ?? "Software Engineer"} at{" "}
          <Link
            href={currentRole?.href || "#"}
            className="font-semibold general-link"
            style={{
              textDecorationColor: currentRole?.color?.hex,
            }}
          >
            {currentRole?.organization ?? "Freelance"}
          </Link>
        </div>
      </header>
      <Image
        src="/me.jpg"
        width={672}
        height={444}
        alt="Nathan Sorkin, smiling with a red hue over the photo. With a blurry image of New York city in the background"
        className="rounded-lg shadow-lg"
        priority
      />
      <section className="prose text-inherit">
        <PortableText value={about?.content} />
      </section>
      <section>
        <nav className="flex gap-4">
          <Link href="/2024_Resume.pdf" className="general-link" forceNewTab>
            Résumé
          </Link>
          <Link href="https://www.github.com/natesrkn" className="general-link">
            Github
          </Link>
        </nav>
      </section>
      <section>
        <h4 className="section-header">What I&apos;m Listening To</h4>
        <TopTracks />
      </section>
      <section className="grid gap-8 sm:grid-cols-2">
        <section className="w-full">
          <h4 className="section-header">What I&apos;m Reading</h4>
          <CurrentlyReading />
        </section>
        <section className="flex-1 w-full">
          <h4 className="section-header">Things I&apos;ve Enjoyed Reading</h4>
          <FavoriteBooks />
        </section>
      </section>
    </div>
  );
}
