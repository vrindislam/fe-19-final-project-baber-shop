import React, { PureComponent } from "react";
import * as Sentry from "@sentry/react";
import ErrorPageBoundary from "../../pages/ErrorPage_Boundary";

// used class component as Hooks for ErrorBoundary are not available

export default class ErrorBoundary extends PureComponent {
  state = {
    error: "",
    eventId: "",
    errorInfo: "",
    hasError: false
  };

  // use to catch an error
  static getDerivedStateFromError (error) {
    return { hasError: true, error };
  }

  // use to log an error in Sentry
  componentDidCatch (error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId, errorInfo, error });
    });
  }

  render () {
    const { hasError, errorInfo, eventId, error } = this.state;
    if (hasError) {
      return <ErrorPageBoundary
        errorInfo={errorInfo}
        eventId={eventId}
        error={error} />
    }
    return this.props.children;
  }
}
