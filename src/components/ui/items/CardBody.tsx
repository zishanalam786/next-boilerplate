import styles from './CardBody.module.css';

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${styles.cardBodyDefault} ${className || ''}`}
    >
      {children}
    </div>
  );
};
//EOF