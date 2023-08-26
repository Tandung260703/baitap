import { useId } from 'react';
import './Checkbox.css';

function Checkbox({ todoName, isSuccess, onChange }) {
  const id = useId();
  return (
    <div className="wrapper-checkbox">
      <input type="checkbox" id={id} defaultChecked={isSuccess} onChange={onChange} />
      <label className={`checkbox-label ${isSuccess ? 'active' : ''}`} htmlFor={id}>
        {todoName}
      </label>
    </div>
  );
}

export default Checkbox;
