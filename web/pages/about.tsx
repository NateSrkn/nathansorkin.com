import { GetServerSideProps, NextPage } from "next";
import { Layout } from "../components/Layout";
import { Link } from "../components/Link";
import Image from "next/image";

import { getBooks } from "../shared/lib";

import {
  BookShelfPagingObject,
  SpotifyPagingObject,
  SpotifyTrack,
} from "../shared/types";
import { useState, useRef, useEffect } from "react";
import client from "../client";
import { PortableText } from "../components/PortableText";
import { getTopTracks } from "../shared/lib/spotify";

const About: NextPage<{
  about: any;
  tracks: SpotifyPagingObject<SpotifyTrack>;
  books: { favorites: BookShelfPagingObject; reading: BookShelfPagingObject };
}> = ({ about, tracks, books }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
        <img src={"./me.jpg"} className="rounded-lg shadow-lg" />
        <section className="prose text-inherit">
          <PortableText value={about.content} />
        </section>
        <section>
          <h4 className="section-header">What I&apos;m Listening To</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tracks &&
              tracks.items.map((track) => (
                <li key={track.id}>
                  <button
                    className="group flex gap-2 items-center p-1 hover:bg-slate-600 rounded text-left w-full"
                    onClick={() => handleSetAudio(track)}
                  >
                    <Image
                      src={track.album.images[0].url}
                      height={50}
                      width={50}
                      alt={`${track.name} by ${track.artists[0].name} on the album ${track.album.name}`}
                      className="rounded-sm shadow-lg flex-1"
                    />
                    <div className="truncate flex-1">
                      <div className="truncate">{track.name}</div>
                      <div className="text-xs truncate">
                        <span
                          className={`${
                            !track.preview_url ? "group-hover:hidden" : ""
                          }`}
                        >
                          {track.artists
                            .map((artist) => artist.name)
                            .join(", ")}
                        </span>
                        {!track.preview_url && (
                          <span className="group-hover:block hidden text-xs truncate">
                            No preview available
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
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
                  className="rounded-sm shadow-lg max-w-xs"
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

export const getServerSideProps: GetServerSideProps = async () => {
  const [about, tracks, books] = await Promise.all([
    client.fetch(`*[_type == "about"][0]`),
    getTopTracks(10),
    getBooks(),
  ]);

  return {
    props: {
      about,
      tracks,
      books: {
        favorites: books[0],
        reading: books[1],
      },
    },
  };
};
