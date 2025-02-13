import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { X } from '@phosphor-icons/react';

interface SidebarModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function SidebarModal({ children, onClose }: SidebarModalProps) {
  const rightPosition = '-right-[400px]';
  const [asidePosition, setAsidePosition] = useState(rightPosition);

  async function handleClose() {
    await setAsidePosition(rightPosition);
    setTimeout(() => onClose(), 100);
  }

  useEffect(() => {
    setAsidePosition('right-0');
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 flex h-screen w-full overflow-hidden bg-[#00000080]" style={{ zIndex: 100 }}>
      <button type="button" className="w-full cursor-pointer" onClick={handleClose} />
      <aside className={`fixed ${asidePosition} h-full w-full bg-white p-5 transition-all md:w-[400px]`}>
        <div className="absolute top-5 right-5">
          <button type="button" className="cursor-pointer" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>
        <section className={`h-full`}>{children}</section>
      </aside>
    </div>,
    document.body,
  );
}
