import { m, motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem: React.FC<any> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={styles.li}
    >
      <div style={{ ...style, ...styles.iconPlaceholder }} />
      <div style={{ ...style, ...styles.textPlaceholder }} />
    </motion.li>
  );
};

const styles = {
  li: {
    listStyle: 'none',
    margin: '0 0 20px 0',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  } as React.CSSProperties,
  iconPlaceholder: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    flex: '40px 0',
    marginRight: '20px',
  } as React.CSSProperties,
  textPlaceholder: {
    width: '200px',
    height: '20px',
    borderRadius: '5px',
    flex: '1',
  } as React.CSSProperties,
};
