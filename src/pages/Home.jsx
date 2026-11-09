import heroImg from '../assets/hero.png';
import ToolCard from '../component/ToolCard';
import { toolsData } from '../data/toolsData';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* HERO SECTION: 2 Columns */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-20">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Your All-in-One <br />
            Online <span className="text-purple-600">PDF Tools.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
            We build PDF Tools to make your life easier. Access an easy-to-use PDF Solution 
            with all the features you need: Convert files to PDF, from PDF, merge, fill, 
            sign and compress PDFs within a few clicks.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img 
            src={heroImg} 
            alt="PDF Tools illustration" 
            className="w-full max-w-md object-contain drop-shadow-md"
          />
        </div>
      </section>

      {/* SECTION TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Most Popular <span className="text-purple-600">PDF Tools</span>
        </h2>
      </div>

      {/* TOOLS GRID: 4 Columns (Responsive: 1 col on mobile, 2 on tablet, 4 on desktop) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {toolsData.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            path={tool.path}
            iconText={tool.iconText}
            badgeColor={tool.badgeColor}
          />
        ))}
      </section>

    </div>
  );
}

export default Home;
