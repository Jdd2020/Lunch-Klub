import Card from "../card";
import "./index.css";

type ToastProps = {
  message: string;
  type?: "info" | "success" | "error";
  className?: string;
  styles?: React.CSSProperties;
};

const Toast = ({ message, type = "info", className, styles }: ToastProps) => {
  return (
    <div className="toast-container">
      <Card>
        <div className={`toast ${type} ${className}`} style={styles}>
          {message}
        </div>
      </Card>
    </div>
  );
};

export default Toast;
