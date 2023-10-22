const Footer: React.FC = () => {
  return (
    <footer className="mt-12" data-testid="footer">
      <div className="mt-4 flex flex-row justify-center">
        <ul className="flex text-sm font-semibold text-zinc-400">
          <li>
            <a
              href="https://www.linkedin.com/in/faaiz-aslam"
              target="_blank"
              className=" mr-4 text-center text-sm text-zinc-400 font-semibold hover:text-green-500 "
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/faaiz99"
              target="_blank"
              className=" mr-4 text-center text-sm text-zinc-400 font-semibold hover:text-green-500 "
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/commander2811"
              target="_blank"
              className=" mr-4 text-center text-sm text-zinc-400 font-semibold hover:text-green-500 "
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/12505891/faaiz-aslam"
              target="_blank"
              className=" mr-4 text-center text-sm text-zinc-400 font-semibold hover:text-green-500"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-sm font-normal text-center text-zinc-400 mt-1">
          Made in Next JS and Sugar Coded in Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
