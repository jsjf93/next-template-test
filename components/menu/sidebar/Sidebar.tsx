import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './useDimensions';
import Toggle from './Toggle';
import { Navigation } from './Menu';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      style={styles.nav}
    >
      <motion.div style={styles.background} variants={sidebar} />
      <Navigation />
      <Toggle toggle={toggleOpen} />
    </motion.nav>
  );
};

const styles = {
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '300px',
  } as React.CSSProperties,
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '300px',
    background: '#EBEBEB',
  } as React.CSSProperties,
};
