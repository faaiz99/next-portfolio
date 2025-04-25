'use client'; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-zinc-900 flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-zinc-900 shadow-lg rounded-3xl max-w-md w-full">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-zinc-400 mb-6">
            {error.message || 'An unexpected error occurred. Please try again.'}
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-green-500 text-zinc-900 font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}