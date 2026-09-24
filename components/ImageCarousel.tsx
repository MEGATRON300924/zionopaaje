"use client";

import { useRef, useState } from "react";

const images = [
  { src: "/ttfl.jpg", href: "/projects", label: "TTFL Store", alt: "TTFL Store" , cover: true },
  { src: "/favicon%20(1).png", href: "/about", label: "Zion Opaaje", alt: "Zion Opaaje" },
  { src: "/minecraft-svgrepo-com.svg", href: "/about", label: "Gaming", alt: "Gaming" },
  { src: "/mivalogo.png", href: "/about", label: "Education", alt: "Miva Open University" }
];

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const moved = useRef(false);
  const start = useRef({ x: 0, scroll: 0 });

  function begin(e: React.PointerEvent) {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    moved.current = false;
    start.current = { x: e.clientX, scroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  }

  function move(e: React.PointerEvent) {
    const el = trackRef.current;
    if (!dragging || !el) return;
    const delta = e.clientX - start.current.x;
    if (Math.abs(delta) > 6) moved.current = true;
    el.scrollLeft = start.current.scroll - delta;
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
              if (moved.current) e.preventDefault();
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={image.cover ? "cover-image" : ""}
              draggable={false}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
