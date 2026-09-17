interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  title,
  description,
  href,
  linkLabel,
}) => {
  return (
    <div className="flex flex-col justify-between hover:shadow-lg hover:shadow-zinc-300 dark:hover:shadow-zinc-500 bg-white dark:bg-zinc-900 p-6 rounded-3xl">
      <div>
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block w-fit px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg border border-green-500/30 hover:bg-green-500/20 transition-all duration-300 text-sm text-center"
      >
        {linkLabel}
      </a>
    </div>
  );
};

export default LinkCard;
