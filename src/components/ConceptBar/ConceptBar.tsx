import { Link } from 'react-router-dom';
import './ConceptBar.css';

export function ConceptBar() {
  return (
    <aside className="eg-concept-bar" aria-label="Project disclosure">
      <div className="eg-concept-bar__inner">
        <p className="eg-concept-bar__copy">
          <strong>Self-initiated concept</strong>
          <span>Fictional label, roster, events, and commerce created for demonstration.</span>
        </p>
        <Link to="/concept" className="eg-concept-bar__link">
          View project notes <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </aside>
  );
}
