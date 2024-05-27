export function Magnify(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m15.5 14l5 5l-1.5 1.5l-5-5v-.79l-.27-.28A6.47 6.47 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27zm-6 0C12 14 14 12 14 9.5S12 5 9.5 5S5 7 5 9.5S7 14 9.5 14m2.5-4h-2v2H9v-2H7V9h2V7h1v2h2z"
      ></path>
    </svg>
  );
}