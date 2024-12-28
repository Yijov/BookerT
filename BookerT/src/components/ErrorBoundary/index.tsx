import React, { Component, ReactNode } from "react";
import { CriticalError } from "./CriticalError";
export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo): void {
    console.error("Something went wrong...");
  }

  reloadPage() {
    window.location.reload();
  }
  render() {
    if (this.state.hasError) {
      return <CriticalError />;
    }
    return this.props.children;
  }
}
