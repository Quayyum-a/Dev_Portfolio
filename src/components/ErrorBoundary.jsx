import React from "react";

/**
 * ErrorBoundary - Class-based error boundary for catching React component errors
 * React 19 still requires class components for this - there's no hook equivalent
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error for debugging
    console.error("3D Canvas Error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI - keep the rest of the page usable
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            color: "#888",
            fontSize: "14px",
            background: "rgba(0,0,0,0.1)",
            borderRadius: "8px",
          }}
        >
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ margin: "0 0 8px 0" }}>3D experience unavailable</p>
            <p style={{ margin: 0, fontSize: "12px", opacity: 0.7 }}>
              {this.state.error?.message || "Failed to load 3D content"}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;