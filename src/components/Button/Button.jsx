import { Link } from "react-router-dom";

import "./Button.css";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  to,
  className = "",
}) {
  const classes = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
