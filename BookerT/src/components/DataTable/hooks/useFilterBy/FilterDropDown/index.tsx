import React, { useState } from 'react';
import { Button, Icon, Text } from '../../../../';
import './index.css';

export const FilterDropDown: React.FC<{
  options: any[];
  updatefilter: () => void;
  addFilter: (value: string) => void;
  removeFilter: (value: string) => void;
  isChecked: (value: string) => boolean;
}> = ({ options, updatefilter, addFilter, removeFilter, isChecked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    updatefilter();
    toggle();
  };
  const handleChangle = (ckecked: boolean, value: string) => {
    if (ckecked) {
      addFilter(value);
      return;
    }
    return removeFilter(value);
  };

  return (
    <div className="ads-DataTable-filter_dropdown">
      <Icon name={'filter'}  size={"clamp(12px, 1.2vw, 17px)"} disabled={!options.length} onClick={toggle} />
      {isOpen && (
        <div className="ads-DataTable-filter_dropdown-options">
          {options.map(option => (
            <div key={option} className="ads-DataTable-filter_dropdown-option">
              <Text type='body-no-wrap'>{option}</Text>
              <input
                type="checkbox"
                name={option}
                id={option}
                checked={isChecked(option)}
                onChange={e => handleChangle(e.target.checked, option)}
              />
            </div>
          ))}
          <div className="ads-DataTable-filter_dropdown-done_button">
            <Button size="ss" shape="square" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
