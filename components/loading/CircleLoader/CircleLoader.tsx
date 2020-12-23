import { motion } from 'framer-motion';

export type CircleLoaderProps = {
  size: number;
  primaryColor: string;
  secondaryColor?: string;
  lineWidth: number;
  animationDuration: number;
  ease?: 'linear' | 'easeInOut' | 'circInOut' | 'backInOut' | 'anticipate';
};

export default function CircleLoader(props: CircleLoaderProps) {
  console.log(props);
  return (
    <motion.div
      style={styles.circle(props)}
      animate={{ rotate: 360 }}
      transition={spinTransition(props)}
    />
  );
}

const spinTransition = (props: CircleLoaderProps) => ({
  loop: Infinity,
  ease: props.ease || 'linear',
  duration: props.animationDuration,
});

const styles = {
  circle: (props: CircleLoaderProps) =>
    ({
      height: props.size,
      width: props.size,
      borderRadius: '50%',
      borderWidth: props.lineWidth,
      borderStyle: 'solid',
      borderColor: props.secondaryColor || 'transparent',
      borderTopWidth: props.lineWidth,
      borderTopStyle: 'solid',
      borderTopColor: props.primaryColor,
    } as React.CSSProperties),
};
