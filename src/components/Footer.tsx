export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; {year} FSW Barber. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
