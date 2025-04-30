import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <footer className="border-t bg-white/50 px-4 py-4 sm:px-6 md:px-12">
      <div className="flex w-full flex-col items-center justify-center text-center text-xs font-medium text-muted-foreground sm:flex-row sm:text-sm">
        <span>Developed by&nbsp;</span>
        <Link
          href="https://github.com/Swanand-Wagh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3a63ff] underline"
        >
          Swanand Wagh
        </Link>
        <span className="mx-1 hidden sm:inline">.</span>
        <span className="mt-1 sm:mt-0">The source code is available on&nbsp;</span>
        <Link
          href="https://github.com/Swanand-Wagh/Socraitive"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center gap-1 sm:mt-0 sm:gap-2"
        >
          <span className="underline">GitHub</span>
          <GitHubLogoIcon className="scale-125 text-foreground/85 sm:scale-150" />
        </Link>
      </div>
    </footer>
  );
};
