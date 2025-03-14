import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  imageUrl: string;
  projectUrl?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, projectUrl, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      >
        <div className="relative max-w-[90vw] max-h-[90vh]">
          <img 
            src={imageUrl} 
            alt="Project preview" 
            className="w-full h-full object-contain"
          />
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-300 text-black rounded-full hover:bg-blue-400 transition"
            >
              Visit Project
            </a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
