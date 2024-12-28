import React, { useState, ReactNode, useRef, CSSProperties } from 'react';
import { useOutsideClick } from '../../utils';
import { Text } from '../Text';
import './index.css';

interface IModal {
  onClose: Function; // logic to close an other stuff
  children: ReactNode;
  title: ReactNode;
  draggable?: boolean;
  footer?: ReactNode;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
}

export const Modal: React.FC<IModal> = ({
  onClose,
  children,
  draggable,
  title,
  footer,
  ...styleProps
}) => {
  const modal = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState<number | null>(null);
  const [offsetY, setOffsetY] = useState<number | null>(null);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggable) return;
    setIsDragging(true);
    setOffsetX(e.clientX - e.currentTarget.getBoundingClientRect().left);
    setOffsetY(e.clientY - e.currentTarget.getBoundingClientRect().top);
  };

  const handleMouseUp = () => {
    if (!draggable) return;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && offsetX !== null && offsetY !== null) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      setModalStyle({
        left: `${left}px`,
        top: `${top}px`
      });
    }
  };

  useOutsideClick(modal, onClose as () => void);

  return (
    <div
      id="ads-modal-container"
      className="ads-modal-container"
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={modal}
        className="ads-modal-content"
        style={{...modalStyle, ...styleProps}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <span className="ads-modal-close" onClick={() => onClose()}>
          &times;
        </span>
        <Text margin={"0 0 8px 0"} type="title">{title}</Text>
        <div>{children}</div>
        {footer && (
          <div >{footer}</div>
        )}
      </div>
    </div>
  );
};
