export function Star(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 72 72"
      {...props}
    >
      <path
        fill="#fcea2b"
        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
      ></path>
      <path
        fill="none"
        stroke="#fd3d57"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
      ></path>
    </svg>
  );
}
