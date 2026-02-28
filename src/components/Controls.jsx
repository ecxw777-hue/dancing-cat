import '../styles/Controls.css'

function Controls({ isPlaying, onToggle }) {
  return (
    <div className="controls">
      <button
        className={`control-btn ${isPlaying ? 'playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause dancing' : 'Start dancing'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-text">{isPlaying ? 'Pause' : 'Dance!'}</span>
      </button>
    </div>
  )
}

export default Controls
