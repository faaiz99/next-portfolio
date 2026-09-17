import { Fragment } from "react";
import { ArrowDown } from "lucide-react";

interface Job {
  role: string;
  company: string;
  duration: string;
  current: boolean;
  bullets: string[];
}

const jobs: Job[] = [
  {
    role: "Software Engineer",
    company: "Trilops",
    duration: "September 2024 - Present",
    current: true,
    bullets: [
      "Developed RESTful APIs with .NET Core for WealMD for calendar events, 2FA, and email verifications with SendGrid, generating email templates, and RBAC & permission-based access control improving app workflow for users",
      "Developed RESTful API integrations with NestJS for seamless third-party service communication",
      "Designed and built the front-end for an Electronic Medical Records (EMR) integrations page using Angular 17",
      "Engineered server-to-server integrations for telemedicine appointments with Zoom, Google Calendar, and Daily.Co, enhancing scheduling workflows",
      "Integrated CRM platforms (Flow Track, High-level) for lead management and implemented SMS appointment reminders via Sinch",
      "Implemented multi-payment processing flows (redirect, IFrame, pre-authorization, funds-capture) using Stripe and Authorize.Net",
      "Streamlined electronic prescription services by integrating with Life File and Vios for seamless digital healthcare workflows",
      "Implemented 3rd party patient assessment questionnaires using Qualiphy to improve patient assessments",
    ],
  },
  {
    role: "Backend Engineer II",
    company: "Metric",
    duration: "March 2024 - June 2025",
    current: false,
    bullets: [
      "Developed and maintained scalable RESTful APIs to support web and mobile applications",
      "Engineered custom accounting platform integrations end to end (QuickBooks, Shopify, ZohoBooks, Xero) using Express.js",
      "Refactored backend systems to improve code structure, maintainability, and performance",
      "Implemented CI/CD pipelines using GitHub Actions for automated Azure deployments",
      "Managed and optimized cloud resources on Azure including Web App Services and Redis Cache",
      "Designed high-volume transaction processing systems using BullMQ and Firebase batching",
      "Automated code quality checks by integrating ESLint and Prettier into development workflows",
      "Created comprehensive technical documentation for APIs and system processes",
      "Contributed to front-end development of MAX AI and Metric Web App",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Zeros",
    duration: "September 2023 - February 2024",
    current: false,
    bullets: [
      "Implemented pixel-perfect designs for a SaaS Marketplace on Next.js with Tailwind CSS from Figma using Dev Mode",
      "Implemented Amplitude Analytics into their product to monitor user activity and identify potential prospects",
      "Automated parsing CSVs with a Node.js script into NoSQL/SQL databases and uploading images to Azure storage container",
      "Wrote MongoDB queries to fetch data at runtime (SSG) and deployed Next.js to Vercel, generating over 2000 pages",
      "Generated sitemaps, robots.txt, and optimized pages with meta content, descriptions, and async loading of non-critical components",
      "Built a cross-platform prototype UI chat for conversational AI in Electron JS; tested prototype products and provided logs",
    ],
  },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-testid="about">
      {/* Work Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-zinc-800 dark:text-zinc-200 mb-12">
          What I&apos;ve
          <span className="text-green-500 font-extrabold mx-1 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-green-700 dark:from-green-300 dark:via-green-400 dark:to-green-500">Built</span>
          and
          <span className="text-green-500 font-extrabold mx-1 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-green-700 dark:from-green-300 dark:via-green-400 dark:to-green-500">Contributed to</span>
        </h2>

        <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 text-center">Work Experience</p>

        <div className="flex flex-col items-stretch max-w-3xl mx-auto">
          {jobs.map((job, index) => (
            <Fragment key={job.company}>
              <div className="hover:shadow-lg hover:shadow-zinc-300 dark:hover:shadow-zinc-500 bg-white dark:bg-zinc-900 p-8 rounded-3xl">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    {job.role}, {job.company}
                  </h3>
                  <span
                    className={
                      job.current
                        ? "text-xs font-semibold px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 whitespace-nowrap"
                        : "text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 whitespace-nowrap"
                    }
                  >
                    {job.duration}
                  </span>
                </div>
                <ul className="text-sm font-normal text-zinc-600 dark:text-zinc-400 space-y-2 list-disc pl-5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {index < jobs.length - 1 && (
                <div className="flex justify-center py-3 text-green-500" aria-hidden="true">
                  <ArrowDown size={20} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
