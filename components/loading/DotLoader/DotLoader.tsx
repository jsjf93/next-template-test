import { motion } from 'framer-motion';

export type DotLoaderProps = {
  size: number;
  color: string;
};

export default function DotLoader(props: DotLoaderProps) {
  return (
    <motion.div
      style={styles(props).loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={styles(props).dot}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={styles(props).dot}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={styles(props).dot}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}

const styles = (props: DotLoaderProps) => ({
  loadingContainer: {
    width: props.size * 3 + (2 * props.size) / 2,
    display: 'flex',
    justifyContent: 'space-between',
  } as React.CSSProperties,
  dot: {
    height: props.size,
    width: props.size,
    borderRadius: '50%',
    backgroundColor: props.color,
  } as React.CSSProperties,
});

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};
