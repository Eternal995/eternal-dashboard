const icons = {
  video: [
    <rect key="frame" x="3" y="5" width="18" height="14" rx="2" />,
    <path key="play" d="M10 9l5 3-5 3z" />,
  ],
  community: [
    <circle key="head1" cx="8" cy="9" r="3" />,
    <circle key="head2" cx="16" cy="9" r="3" />,
    <path key="group1" d="M3 20c0-2.5 2.5-4 5-4" />,
    <path key="group2" d="M16 16c2.5 0 5 1.5 5 4" />,
  ],
  chat: [
    <path
      key="bubble"
      d="M12 21a9 9 0 1 0-7.5-4l-1.5 4 4-1.5A9 9 0 0 0 12 21z"
    />,
  ],
  home: [
    <path key="roof" d="M4 10l8-6 8 6" />,
    <path key="body" d="M6 10v8h12v-8" />,
  ],
  tv: [
    <rect key="screen" x="4" y="7" width="16" height="10" rx="2" />,
    <path key="base" d="M8 5h8" />,
  ],
  download: [
    <path key="arrow" d="M12 3v12" />,
    <path key="chev" d="M7 10l5 5 5-5" />,
    <path key="line" d="M5 21h14" />,
  ],
  folder: [
    <path
      key="folder"
      d="M3 7h6l2 2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
    />,
  ],
  compass: [
    <circle key="ring" cx="12" cy="12" r="9" />,
    <path key="needle" d="M9 15l6-6" />,
    <path key="tip" d="M14 10l-1 4-4 1 1-4 4-1z" />,
  ],
  sparkle: [
    <path key="star" d="M12 3l2.2 5.1L20 10l-5.8 1.9L12 17l-2.2-5.1L4 10l5.8-1.9L12 3z" />,
  ],
  wave: [
    <path key="wave" d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />,
  ],
  flask: [
    <path key="top" d="M10 3h4" />,
    <path key="body" d="M10 3v4l-4 7a4 4 0 0 0 3.5 6h5a4 4 0 0 0 3.5-6l-4-7V3" />,
  ],
  globe: [
    <circle key="globe" cx="12" cy="12" r="9" />,
    <path key="meridian" d="M3 12h18" />,
    <path key="lat1" d="M12 3c3 4 3 14 0 18" />,
    <path key="lat2" d="M12 3c-3 4-3 14 0 18" />,
  ],
};

function LineIcon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

export default LineIcon;
