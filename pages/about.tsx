import { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/Layout";
import { Link } from "../components/Link";
import { Image } from "../components/Image";

import { getBooks } from "../shared/lib";

import { SpotifyPagingObject, SpotifyTrack } from "../shared/types";
import { useState, useRef, useEffect } from "react";
import client from "../client";
import { PortableText } from "../components/PortableText";
import { getTopTracks } from "../shared/lib/spotify";
import useSWR from "swr/immutable";
import { Skeleton } from "../components/Skeleton";
import { Track } from "../components/Track";

const About: NextPage<{
  about: any;
}> = ({ about }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  let { data: tracks } = useSWR<SpotifyPagingObject<SpotifyTrack>>(
    "tracks",
    () => getTopTracks(10)
  );
  const { data: books } = useSWR("books", async () => {
    const books = await getBooks();
    return {
      favorites: books[0],
      reading: books[1],
    };
  });
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.5;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);
  const handleSetAudio = (track: SpotifyTrack) => {
    if (!track.preview_url || !audioRef.current) return;
    const isActiveTrack = audioRef.current.src === track.preview_url;
    if (isActiveTrack && isPlaying) {
      setToPause();
    } else if (!isActiveTrack) {
      audioRef.current.src = track.preview_url;
      setToPlay();
    } else if (isActiveTrack && !isPlaying) {
      setToPlay();
    } else {
      setToPause();
    }
  };

  const setToPlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const setToPause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <Layout
      meta={{
        title: "About | Nathan Sorkin",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 root">
        <header className="text-blue-200">
          <Link href="/">
            <h1 className="text-xl font-semibold tracking-wide">
              Nathan Sorkin
            </h1>
          </Link>
          <div className="text-blue-200">
            Full-Stack Developer at{" "}
            <Link
              href="https://www.locusview.com/"
              className="font-semibold decoration-[#C4532C] general-link"
            >
              Locusview
            </Link>
          </div>
        </header>
        <Image
          src="/me.jpg"
          width={672}
          height={444}
          alt="Nathan Sorkin, smiling with a red hue over the photo. With a blurry image of New York city in the background"
          className="rounded-lg shadow-lg"
        />
        <section className="prose text-inherit">
          <PortableText value={about.content} />
        </section>
        <section>
          <nav className="flex gap-4">
            <Link href="/2022_Resume.pdf" className="general-link" forceNewTab>
              Résumé
            </Link>
            <Link
              href="https://www.github.com/natesrkn"
              className="general-link"
            >
              Github
            </Link>
          </nav>
        </section>
        <section>
          <h4 className="section-header">Recent Courses</h4>
          <ul className="sm:list-disc list-outside space-y-2 decoration-slate-50">
            <li>
              <Link
                href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                className="general-link"
              >
                <h6>The Web Developer Bootcamp 2022</h6>
                <div className="text-xs">Colt Steele</div>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
                className="general-link"
              >
                <h6>Javascript Algorithms and Data Structures Masterclass</h6>
                <div className="text-xs">Colt Steele</div>
              </Link>
            </li>
            <li>
              <Link href="https://javascript30.com/" className="general-link">
                <h6>JavaScript30</h6>
                <div className="text-xs">Wes Bos</div>
              </Link>
            </li>
            <li>
              <Link
                href="https://beginnerjavascript.com/"
                className="general-link"
              >
                <h6>Beginner JavaScript</h6>
                <div className="text-xs">Wes Bos</div>
              </Link>
            </li>
            <li>
              <Link
                href="https://reactforbeginners.com/"
                className="general-link"
              >
                <h6>React For Beginners</h6>
                <div className="text-xs">Wes Bos</div>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h4 className="section-header">What I&apos;m Listening To</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tracks ? (
              tracks.items.map((track) => (
                <li key={track.id}>
                  <button
                    className="group flex gap-2 items-center p-1 hover:bg-slate-600 rounded text-left w-full"
                    onClick={() => handleSetAudio(track)}
                  >
                    <Track track={track} hasImage={true} />
                  </button>
                </li>
              ))
            ) : (
              <Skeleton
                count={10}
                component={() => <Track hasImage={true} />}
              />
            )}
          </ul>
        </section>
        <section className="grid gap-8 sm:grid-cols-2">
          <section className="w-full">
            <h4 className="section-header">What I&apos;m Reading</h4>
            {books?.reading && (
              <Link
                href={books.reading.items[0].volumeInfo.infoLink}
                className="flex sm:inline-flex gap-2 items-center sm:items-start sm:flex-col hover:bg-slate-600 rounded p-1"
              >
                <img
                  src={books.reading.items[0].volumeInfo.imageLinks.thumbnail}
                  alt={`${
                    books.reading.items[0].volumeInfo.title
                  } by ${books.reading.items[0].volumeInfo.authors.join(", ")}`}
                  className="rounded-sm shadow-lg max-w-xs sm:w-full"
                />
                <div>
                  <div>{books.reading.items[0].volumeInfo.title}</div>
                  <div className="text-xs">
                    {books.reading.items[0].volumeInfo.authors.join(", ")}
                  </div>
                </div>
              </Link>
            )}
          </section>
          <section className="flex-1 w-full">
            <h4 className="section-header">Things I&apos;ve Enjoyed Reading</h4>
            <ul className="space-y-2 grid grid-cols-1">
              {books?.favorites &&
                books.favorites.items.map((book) => (
                  <li key={book.id}>
                    <Link
                      href={book.volumeInfo.infoLink}
                      className="flex items-center gap-4 p-1 hover:bg-slate-600 rounded"
                    >
                      <div>
                        <div>{book.volumeInfo.title}</div>
                        <div className="text-xs">
                          {book.volumeInfo.authors.join(", ")}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const about = await client.fetch(`*[_type == "about"][0]`);
  return {
    props: {
      about,
    },
  };
};
