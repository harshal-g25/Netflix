import React, { useState, useEffect } from "react";

function MediaPlaceholder({
  src,
  alt = "Memory",
  className = "",
  mediaHint = "",
  type = "image",
  aspect = "video",
}) {
  const [status, setStatus] = useState("loading");

  const fullSrc = src
    ? src.startsWith("/")
      ? src
      : `/media/${src}`
    : mediaHint
      ? `/media/${mediaHint}`
      : null;

  useEffect(() => {
    setStatus("loading");
  }, [fullSrc]);

  const aspectClass =
    aspect === "poster"
      ? "aspect-[2/3]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-video";

  if (type === "video" && fullSrc && status !== "error") {
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <video
          className="w-full h-full object-cover"
          src={fullSrc}
          muted
          loop
          playsInline
          onLoadedData={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
        {status !== "loaded" && (
          <div className="absolute inset-0 media-placeholder" aria-hidden="true" />
        )}
      </div>
    );
  }

  if (fullSrc && status !== "error") {
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <img
          src={fullSrc}
          alt={alt}
          className="w-full h-full object-cover block"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
        {status === "loading" && (
          <div className="absolute inset-0 media-placeholder" aria-hidden="true" />
        )}
      </div>
    );
  }

  return (
    <div
      className={`media-placeholder ${aspectClass} w-full ${className}`}
      aria-hidden="true"
    />
  );
}

export default MediaPlaceholder;
