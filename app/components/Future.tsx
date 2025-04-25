import GreenTick from "./shared/GreenTick";

const Future: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-200">
  The Way <span className="text-green-500 font-extrabold relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">Forward</span>
</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* What to Read Card */}
        <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-6 rounded-3xl">
          <h3 className="text-xl font-semibold text-zinc-200 mb-4">
            What needs to be <span className="text-green-500 font-bold">read</span>
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            {[
              "The Pragmatic Programmer",
              "Starting off with C++",
              "Operating Systems Concept",
              "TypeScript Handbook",
              "Cracking the Coding Interview"
            ].map((item) => (
              <li key={item} className="flex items-center">
                <GreenTick />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-zinc-200 mt-6 mb-4">Education</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              <span className="ml-2">Get a Master&apos;s Degree</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-zinc-200 mt-6 mb-4">Course</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              <span className="ml-2">Systems Design</span>
            </li>
          </ul>
        </div>

        {/* What to Learn Card */}
        <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-6 rounded-3xl">
          <h3 className="text-xl font-semibold text-zinc-200 mb-4">
            What needs to be <span className="text-green-500 font-bold">learned</span>
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            {[
              {text: "Unit Testing", completed: false},
              {text: "ORM's", completed: true},
              {text: "Reducing Bundle Size", completed: false},
              {text: "Cloud Platforms", completed: false},
              {text: "Load Balancing (Nginx)", completed: false},
              {text: "Microservices", completed: false},
              {text: "Golang", completed: false},
              {text: "GraphQL", completed: false}
            ].map((item) => (
              <li key={item.text} className={`flex items-center ${item.completed ? 'line-through' : ''}`}>
                <GreenTick />
                <span className="ml-2">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to Experience Card */}
        <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-6 rounded-3xl">
          <h3 className="text-xl font-semibold text-zinc-200 mb-4">
            What needs to be <span className="text-green-500 font-bold">experienced</span>
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            {[
              "Contribute to Open Source S/W",
              "Attend JSConf (Node/React/Next/Vue)",
              "Work in a German Product Company",
              "Study in a Foreign University"
            ].map((item) => (
              <li key={item} className="flex items-center">
                <GreenTick />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};


export default Future;