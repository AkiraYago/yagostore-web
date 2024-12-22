import React from 'react'

const DropdownButton = ({ innerText = "Dropdown Text", color, textColor, onClickEvent, menuTexts = [] }) => {
  const dropdownMenu = menuTexts.map(text =>
    <DropdownItem
      key={`dropdown-item-${text}`}
      innerText={text}
      onClickEvent={onClickEvent}
    />
  );

  return (
    <div className="nav-item dropdown">
      <button className={`btn ${color && "btn-" + color} ${textColor && "text-" + textColor} border border-0 dropdown-toggle`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {innerText}
      </button>
      <ul className="dropdown-menu">
        {dropdownMenu}
      </ul>
    </div>
  );
};

const DropdownItem = ({ innerText, onClickEvent }) => {
  return (
    <li>
      <button className="dropdown-item text-capitalize" onClick={() => onClickEvent(innerText)}>
        {innerText}
      </button>
    </li>
  );
};

export default DropdownButton