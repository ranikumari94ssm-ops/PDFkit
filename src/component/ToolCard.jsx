import { Link } from 'react-router-dom';

function ToolCard({ title, description, path, iconText, badgeColor }) {
  return (
    <Link
      to={path}
      className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200 flex items-start gap-4 group"
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
  );
}

export default ToolCard;