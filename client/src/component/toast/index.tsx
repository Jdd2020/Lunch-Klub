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

const ToastIcon = ({ type }: { type: "info" | "success" | "error" }) => {
  switch (type) {
    case "success":
      return <i className="fas fa-check-circle toast-icon" />;
    case "error":
      return <i className="fas fa-exclamation-circle toast-icon" />;
    default:
      return <i className="fas fa-info-circle toast-icon" />;
  }
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
        <div className="toast-icon-container">
          <ToastIcon type={type} />
        </div>
        <ToastDismissButton onClick={onToastDismiss} />
        <div className={`toast ${type} ${className}`} style={styles}>
          {message}
        </div>
      </Card>
    </div>
  );
};

export default Toast;
