import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  hideHeader?: boolean;
}

const Modal = ({ isOpen, onClose, title, children, hideHeader = false }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-lg rounded-xl modal-container animate-scale-in overflow-hidden ${hideHeader ? 'bg-background' : 'bg-popover'}`}>
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        
        {/* Header - only show if not hidden */}
        {!hideHeader && title && (
          <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
            <h2 className="font-serif text-2xl font-bold text-charcoal">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-charcoal/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-charcoal/60 hover:text-primary transition-colors" />
            </button>
          </div>
        )}

        {/* Close button when header is hidden */}
        {hideHeader && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/20 hover:bg-background/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground/80 hover:text-primary transition-colors" />
          </button>
        )}

        {/* Content */}
        <div className={hideHeader ? "pt-2" : "p-6"}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
