import GreenTick from "./shared/GreenTick";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Work Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-zinc-200 mb-12">
          What I&apos;ve
          <span className="text-green-500 font-extrabold mx-1 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">Built</span>
          and
          <span className="text-green-500 font-extrabold mx-1 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">Contributed to</span>
        </h2>

        <div className="">
          <div className="hover:shadow-lg hover:shadow-zinc-500 flex flex-col bg-zinc-900 p-6 rounded-3xl">
            <p className="text-xl font-semibold text-zinc-200 mb-4">Work Experience</p>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-8">
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-green-700"></div>
                <time className="block text-sm font-normal text-zinc-400 mb-1">March 2024 - Present</time>
                <h3 className="text-lg font-semibold text-zinc-200">Backend Engineer II, Metric VC Backed.</h3>
                <ul className="text-sm font-normal text-zinc-400 mt-1 space-y-1 list-disc pl-5">
                  <li>Developed and maintained scalable RESTful APIs to support web and mobile applications</li>
                  <li>Engineered custom accounting platform integrations end to end (QuickBooks, Shopify, ZohoBooks, Xero) using Express.js</li>
                  <li>Refactored backend systems to improve code structure, maintainability, and performance</li>
                  <li>Implemented CI/CD pipelines using GitHub Actions for automated Azure deployments</li>
                  <li>Managed and optimized cloud resources on Azure including Web App Services and Redis Cache</li>
                  <li>Designed high-volume transaction processing systems using BullMQ and Firebase batching</li>
                  <li>Automated code quality checks by integrating ESlint and Prettier into development workflows</li>
                  <li>Created comprehensive technical documentation for APIs and system processes</li>
                  <li>Contributed to front-end development of MAX AI and Metric Web App</li>
                </ul>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-green-700"></div>
                <time className="block text-sm font-normal text-zinc-400 mb-1">September 2024 - Present</time>
                <h3 className="text-lg font-semibold text-zinc-200">Software Engineer, Trilops LLC.</h3>
                <ul className="text-sm font-normal text-zinc-400 mt-1 space-y-1 list-disc pl-5">
                  <li>Developed RESTful API integrations using HTTP Client and RxJS for seamless third-party service communication</li>
                  <li>Designed and built the front-end for an Electronic Medical Records (EMR) integrations page using Angular 17</li>
                  <li>Engineered server-to-server integrations for telemedicine appointments with Zoom and Google Calendar, enhancing scheduling workflows</li>
                  <li>Integrated CRM platforms (Flow Track, High-level) for lead management and implemented SMS appointment reminders via Sinch</li>
                  <li>Implemented multi-payment processing flows (redirect, IFrame, pre-authorization, funds-capture) using Stripe and Authorize.Net</li>
                  <li>Streamlined electronic prescription services by integrating with Life File for seamless digital healthcare workflows</li>
                  <li>Implemented 3rd Party Patients Assessments Questionnaires using Qualiphy</li>
                </ul>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="block text-sm font-normal text-zinc-400 mb-1">September 2023 - February 2024</time>
                <h3 className="text-lg font-semibold text-zinc-200">Software Engineer, Zeros Inc.</h3>
                <ul className="text-sm font-normal text-zinc-400 mt-1 space-y-1 list-disc pl-5">
                  <li>Deployed to and handled staging and production environments on Vercel</li>
                  <li>Implemented pixel-perfect designs for their product on Next.js with Tailwind CSS from Figma using Dev Mode</li>
                  <li>Implemented Amplitude Analytics into their product to monitor user activity and identify potential prospects</li>
                  <li>Automated parsing CSVs with a Node.js script into NoSQL/SQL databases and uploading images to Azure storage container</li>
                  <li>Wrote MongoDB queries to fetch data at runtime (SSG) and deployed Next.js to Vercel generating over 2000 pages</li>
                  <li>Generated sitemaps, robots.txt, and optimized pages with meta content, descriptions, and async loading of non-critical components</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default About;