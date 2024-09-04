import { ImageResponse } from "next/og";
export async function GET(req: Request) {
  const baseURL = new URL(req.url).origin;
  const favicon = await fetch(`${baseURL}/image/favicon-196x196.png`).then(
    (res) => res.arrayBuffer(),
  );
  const profile = await fetch(`${baseURL}/me.jpg`).then((res) =>
    res.arrayBuffer(),
  );
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            filter: "grayscale(100%)",
          }}
          src={profile as unknown as any}
          alt="Nathan Sorkin, smiling with a red hue over the photo. With a blurry image of New York city in the background"
        />
        <img
          style={{
            objectFit: "contain",
            height: 196,
            width: 196,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          src={favicon as unknown as any}
          alt="The letters NS with a blue hue and white text"
        />
      </div>
    ),
  );
}
