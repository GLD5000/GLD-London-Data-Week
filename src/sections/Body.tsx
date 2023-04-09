export default function Body() {
  return (
    <main id="main-content" className="relative grid w-screen grow grid-cols-frAutoFr content-between mt-16 p-10">
      <div className=" col-start-2 bg-bg-var dark:bg-bg-var-dk p-2 rounded-3xl border-2 border-border dark:border-border">
        <h1 className="mx-auto w-fit text-4xl decoration-current underline-offset-4  underline">GLD React Starter</h1>

        <h2 className="mt-10 text-2xl">Includes:</h2>
        <ul className=" list-disc w-fit pl-8">
          <li>Light / Dark mode</li>
          <li>Responsive body section with media queries</li>
          <li>Responsive Header section with hamburger menu for small screens</li>
          <li>Simple Footer</li>
          <li>Custom accessible colour scheme built in</li>
          <li>Accesible link to skip to main content</li>
        </ul>

        <h2 className="mt-10 text-2xl">Made with:</h2>
        <ul className=" list-disc w-fit pl-8">
          <li>Vite & SWC</li>
          <li>React & TypeScript</li>
          <li>TailwindCSS</li>
          <li>Prettier & Eslint (with Airbnb style)</li>
          <li>Husky & Lint-Staged</li>
        </ul>
      </div>
    </main>
  );
}
