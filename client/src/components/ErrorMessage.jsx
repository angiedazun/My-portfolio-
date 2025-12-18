import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message = 'Something went wrong', retry = null }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[300px] px-4"
    >
      <div className="glass rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-red-500/20">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-400 mb-6">{message}</p>
        {retry && (
          <button
            onClick={retry}
            className="btn-primary"
          >
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorMessage;
