import { Link } from 'react-router-dom';
import { GlowingEffect } from './ui/glowing-effect';

function ToolCard({ title, description, path, iconText, badgeColor }) {
  return (
    <div className="relative h-full rounded-2xl border border-gray-100 p-1.5 bg-white transition-all duration-300">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <Link
        to={path}
        className="relative z-10 flex h-full items-start gap-4 p-4 bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 group"
      >
        {/* Icon Badge */}
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-xs ${badgeColor}`}>
          {iconText}
        </div>

        {/* Text Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors text-base">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ToolCard;
