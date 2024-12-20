export const YTvideos = () => {
  return (
    <div>
      <h1>Video</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XWePdlCGTno" // Replace XWePdlCGTno with your video ID
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};