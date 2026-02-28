import '../styles/DancingCat.css'

function DancingCat({ isPlaying }) {
  return (
    <div className={`dancing-cat ${isPlaying ? 'playing' : ''}`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="cat-svg"
      >
        {/* Left ear */}
        <polygon points="50,70 65,20 80,70" fill="#ff9f43" stroke="#e17055" strokeWidth="2" />
        <polygon points="55,65 65,30 75,65" fill="#ffcccc" />

        {/* Right ear */}
        <polygon points="120,70 135,20 150,70" fill="#ff9f43" stroke="#e17055" strokeWidth="2" />
        <polygon points="125,65 135,30 145,65" fill="#ffcccc" />

        {/* Head */}
        <ellipse cx="100" cy="90" rx="55" ry="45" fill="#ff9f43" stroke="#e17055" strokeWidth="2" />

        {/* Eyes */}
        <g className="cat-eyes">
          <ellipse cx="80" cy="85" rx="8" ry="10" fill="#2d3436" />
          <ellipse cx="120" cy="85" rx="8" ry="10" fill="#2d3436" />
          <circle cx="83" cy="82" r="3" fill="#ffffff" />
          <circle cx="123" cy="82" r="3" fill="#ffffff" />
        </g>

        {/* Nose */}
        <polygon points="100,95 96,100 104,100" fill="#e17055" />

        {/* Mouth */}
        <path d="M 96,102 Q 100,108 104,102" fill="none" stroke="#e17055" strokeWidth="1.5" />
        <path d="M 92,100 Q 80,108 70,105" fill="none" stroke="#e17055" strokeWidth="1.5" className="cat-whisker" />
        <path d="M 92,103 Q 80,112 68,110" fill="none" stroke="#e17055" strokeWidth="1.5" className="cat-whisker" />
        <path d="M 108,100 Q 120,108 130,105" fill="none" stroke="#e17055" strokeWidth="1.5" className="cat-whisker" />
        <path d="M 108,103 Q 120,112 132,110" fill="none" stroke="#e17055" strokeWidth="1.5" className="cat-whisker" />

        {/* Body */}
        <ellipse cx="100" cy="155" rx="40" ry="35" fill="#ff9f43" stroke="#e17055" strokeWidth="2" />

        {/* Belly */}
        <ellipse cx="100" cy="158" rx="25" ry="22" fill="#ffeaa7" />

        {/* Left arm */}
        <g className="cat-left-arm">
          <path d="M 65,140 Q 40,155 45,170" fill="none" stroke="#ff9f43" strokeWidth="12" strokeLinecap="round" />
          <circle cx="45" cy="172" r="7" fill="#ff9f43" stroke="#e17055" strokeWidth="1.5" />
        </g>

        {/* Right arm */}
        <g className="cat-right-arm">
          <path d="M 135,140 Q 160,155 155,170" fill="none" stroke="#ff9f43" strokeWidth="12" strokeLinecap="round" />
          <circle cx="155" cy="172" r="7" fill="#ff9f43" stroke="#e17055" strokeWidth="1.5" />
        </g>

        {/* Tail */}
        <path
          className="cat-tail"
          d="M 60,175 Q 30,170 25,150 Q 20,130 35,125"
          fill="none"
          stroke="#ff9f43"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {/* Dance floor glow */}
      <div className="dance-floor" />
    </div>
  )
}

export default DancingCat
