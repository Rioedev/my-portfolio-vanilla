import Nav from "./Nav";
const Header = () => {
  return /*html*/ `
    <header class="flex justify-between items-center mt-10 mb-32">
      <a href="/">
        <svg width="155" height="56.59755341177487" viewBox="0 0 320 56.59755341177487" class="css-1j8o68f"><defs id="SvgjsDefs4237"></defs><g id="SvgjsG4238" featurekey="symbolFeature-0" transform="matrix(1.2982333321645747,0,0,1.2982333321645747,-15.347715106562065,-41.355108297374194)" fill="#3c1a5c"><g xmlns="http://www.w3.org/2000/svg"><path d="M17.399,59.888l11.733,11.734c0.621,0.621,1.628,0.621,2.249,0l3.985-3.986c0.621-0.62,0.621-1.627,0-2.248l-10.609-10.61   c-0.622-0.62-0.622-1.628,0-2.249l10.609-10.609c0.621-0.622,0.621-1.628,0-2.25l-3.985-3.986c-0.622-0.621-1.628-0.621-2.249,0   L17.399,47.418l-5.112,5.11c-0.62,0.621-0.62,1.629,0,2.249L17.399,59.888z"></path><path d="M88.384,54.777c0.621-0.62,0.621-1.628,0-2.249l-5.11-5.11L71.54,35.684c-0.621-0.621-1.627-0.621-2.249,0l-3.985,3.986   c-0.621,0.621-0.621,1.628,0,2.25l10.608,10.609c0.622,0.621,0.622,1.629,0,2.249l-10.608,10.61c-0.621,0.621-0.621,1.628,0,2.248   l3.985,3.986c0.621,0.621,1.628,0.621,2.249,0l11.733-11.734L88.384,54.777z"></path></g><path xmlns="http://www.w3.org/2000/svg" d="M43.502,75.334l-6.684-3.403c-0.492-0.25-0.703-0.823-0.469-1.282l19.506-38.304c0.234-0.457,0.822-0.624,1.314-0.374  l6.683,3.403c0.493,0.251,0.703,0.825,0.47,1.282L44.814,74.96C44.581,75.418,43.995,75.585,43.502,75.334z"></path></g><g id="SvgjsG4239" featurekey="nameFeature-0" transform="matrix(1.5518307345172704,0,0,1.5518307345172704,115.71700823510274,-11.752941471762366)" fill="#36016f"><path d="M18.16 11.440000000000001 c2.4 0 4.3936 0.74 5.98 2.22 s2.38 3.3667 2.38 5.66 c0 3.5733 -1.5067 5.96 -4.52 7.16 l0 0.08 c1.0133 0.29332 1.8066 0.78 2.38 1.46 s1.0066 1.4733 1.3 2.38 s0.48 2.36 0.56 4.36 c0.10668 2.6133 0.48 4.36 1.12 5.24 l-6.28 0 c-0.34668 -0.88 -0.61336 -2.5333 -0.80004 -4.96 c-0.21332 -2.56 -0.68 -4.2332 -1.4 -5.02 s-1.8933 -1.18 -3.52 -1.18 l-6.32 0 l0 11.16 l-6.28 0 l0 -28.56 l15.4 0 z M15.96 24.36 c1.3333 0 2.38 -0.3 3.14 -0.9 s1.14 -1.66 1.14 -3.18 c0 -1.44 -0.37332 -2.46 -1.12 -3.06 s-1.8134 -0.9 -3.2 -0.9 l-6.88 0 l0 8.04 l6.92 0 z M36.879999999999995 11.440000000000001 l0 4.68 l-5.68 0 l0 -4.68 l5.68 0 z M36.879999999999995 19.32 l0 20.68 l-5.68 0 l0 -20.68 l5.68 0 z M51.400000000000006 18.76 c3.3067 0 5.92 1.0067 7.84 3.02 s2.88 4.6468 2.88 7.9 c0 3.28 -0.98 5.9132 -2.94 7.9 s-4.5532 2.98 -7.78 2.98 c-3.28 0 -5.88 -1.0067 -7.8 -3.02 s-2.88 -4.6332 -2.88 -7.86 c0 -3.3333 0.98 -5.9868 2.94 -7.96 s4.54 -2.96 7.74 -2.96 z M46.400000000000006 29.68 c0 2.1067 0.42668 3.7333 1.28 4.88 s2.0933 1.72 3.72 1.72 c1.68 0 2.94 -0.58668 3.78 -1.76 s1.26 -2.7866 1.26 -4.84 c0 -2.1333 -0.43332 -3.7733 -1.3 -4.92 s-2.1267 -1.72 -3.78 -1.72 c-1.6 0 -2.8267 0.57332 -3.68 1.72 s-1.28 2.7867 -1.28 4.92 z M85.96000000000001 11.440000000000001 l0 28.56 l-5.4 0 l0 -2.64 l-0.08 0 c-1.2267 2.1333 -3.32 3.2 -6.28 3.2 c-2.8533 0 -5.1132 -1.04 -6.78 -3.12 s-2.5 -4.7332 -2.5 -7.96 c0 -3.1467 0.84668 -5.72 2.54 -7.72 s3.9 -3 6.62 -3 c1.2533 0 2.4333 0.26 3.54 0.78 s1.9667 1.2867 2.58 2.3 l0.08 0 l0 -10.4 l5.68 0 z M70.6 29.64 c0 1.8933 0.44664 3.4733 1.34 4.74 s2.1133 1.9 3.66 1.9 c1.6267 0 2.8467 -0.59332 3.66 -1.78 s1.22 -2.82 1.22 -4.9 s-0.42668 -3.6933 -1.28 -4.84 s-2.0666 -1.72 -3.64 -1.72 c-1.6267 0 -2.86 0.6 -3.7 1.8 s-1.26 2.8 -1.26 4.8 z M99.8 18.76 c1.9467 0 3.6801 0.45328 5.2 1.36 s2.7133 2.22 3.58 3.94 s1.3 3.7 1.3 5.94 c0 0.21332 -0.01332 0.56 -0.04 1.04 l-14.92 0 c0.05332 1.6533 0.48664 2.94 1.3 3.86 s2.06 1.38 3.74 1.38 c1.04 0 1.9933 -0.26 2.86 -0.78 s1.42 -1.1533 1.66 -1.9 l5 0 c-1.4667 4.64 -4.6932 6.96 -9.68 6.96 c-1.8933 -0.02668 -3.6466 -0.44 -5.26 -1.24 s-2.9 -2.0467 -3.86 -3.74 s-1.44 -3.66 -1.44 -5.9 c0 -2.1067 0.48668 -4.0268 1.46 -5.76 s2.2666 -3.0266 3.88 -3.88 s3.3533 -1.28 5.22 -1.28 z M104.16 27.439999999999998 c-0.26668 -1.5467 -0.76 -2.6667 -1.48 -3.36 s-1.7467 -1.04 -3.08 -1.04 c-1.3867 0 -2.48 0.39332 -3.28 1.18 s-1.2667 1.86 -1.4 3.22 l9.24 0 z M117.19999999999999 19.32 l4.36 14.12 l0.08 0 l4.36 -14.12 l5.64 0 l-7 20.68 l-6.32 0 l-7.08 -20.68 l5.96 0 z"></path></g></svg>
      </a>
      ${Nav()}
      <svg class="inline-block w-9 font-extrabold cursor-pointer text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    </header>
  `;
};
export default Header;
