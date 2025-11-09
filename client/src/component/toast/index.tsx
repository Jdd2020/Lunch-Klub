import Card from "../card";
import "./index.css";

type ToastProps = {
  message: string;
  onToastDismiss?: () => void;
  type?: "info" | "success" | "error";
  className?: string;
  styles?: React.CSSProperties;
};

const ToastDismissButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="toast-dismiss-button"
      onClick={onClick}
      aria-label="Dismiss"
    >
      <i className="fas fa-times" />
    </button>
  );
};

const Toast = ({
  message,
  type = "info",
  className,
  styles,
  onToastDismiss = () => {},
}: ToastProps) => {
  return (
    <div className="toast-container">
      <Card>
        <ToastDismissButton onClick={onToastDismiss} />
        <div className={`toast ${type} ${className}`} style={styles}>
          {message}
        </div>
      </Card>
    </div>
  );
};

export default Toast;
