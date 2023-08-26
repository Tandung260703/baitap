import './Nav.css';

function Nav({ setNavNumber, navNumber }) {
  return (
    <div className="wrapper-nav">
      <button className={`nav-item ${navNumber === 1 ? 'active' : ''}`} onClick={() => setNavNumber(1)}>
        All
      </button>
      <button className={`nav-item ${navNumber === 2 ? 'active' : ''}`} onClick={() => setNavNumber(2)}>
        Active
      </button>
      <button className={`nav-item ${navNumber === 3 ? 'active' : ''}`} onClick={() => setNavNumber(3)}>
        Complete
      </button>
    </div>
  );
}

export default Nav;
