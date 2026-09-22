"use client";

import { useRef, useState } from "react";

const images = [
  { src: "/ttfl.jpg", href: "/projects", label: "TTFL Store", cover: true },
  { src: "/favicon%20(1).png", href: "/about", label: "Zion Opaaje" },
  { src: "/minecraft-svgrepo-com.svg", href: "/about", label: "Gaming" },
  { src: "/mivalogo.png", href: "/about", label: "Education" }
];

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, scroll: 0 });

  function begin(e: React.PointerEvent) {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    start.current = { x: e.clientX, scroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  }

  function move(e: React.PointerEvent) {
    const el = trackRef.current;
    if (!dragging || !el) return;
    el.scrollLeft = start.current.scroll - (e.clientX - start.current.x);
  }

  function end() {
    setDragging(false);
  }

  return (
    <section className="home-visual-strip" aria-label="Projects and identity">
      <div
        ref={trackRef}
        className={"home-visual-track" + (dragging ? " is-dragging" : "")}
        onPointerDown={begin}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
        onPointerLeave={end}
      >
        {images.map((image) => (
          <a
            href={image.href}
            aria-label={image.label}
            key={image.src}
            onClick={(e) => {
              if (dragging) e.preventDefault();
            }}
          >
            <img
              src={image.src}
              alt=""
              className={image.cover ? "cover-image" : ""}
              draggable={false}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
