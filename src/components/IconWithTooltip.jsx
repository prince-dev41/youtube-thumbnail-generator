import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const Tooltip = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="tooltip"
      style={{
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginBottom: "8px",
        padding: "8px",
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "4px",
        fontSize: "0.8rem",
        whiteSpace: "nowrap",
        zIndex: 10,
      }}
    >
      <h1 className="hidden md:block">{text}</h1>
    </motion.div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

const IconWithTooltip = ({ Icon, tooltipText, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      role="button"
      aria-label={`Tooltip for ${tooltipText}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="relative inline-block mx-3 cursor-pointer"
    >
      <AnimatePresence>
        {hover && <Tooltip text={tooltipText} />}
      </AnimatePresence>
      <Icon size={25} className="text-neutral-500 hover:text-neutral-100" />
    </div>
  );
};

IconWithTooltip.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  tooltipText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

IconWithTooltip.defaultProps = {
  onClick: null,
};

export default IconWithTooltip;
