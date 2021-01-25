import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as Sentry from "@sentry/react";
import Error from "../../pages/ErrorPage_Boundary";

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
    this.setState({ error, errorInfo });
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId, errorInfo });
    });
  }

  render () {
    const { hasError, errorInfo, eventId, error } = this.state;
    if (hasError) {
      return <Error
        errorInfo={errorInfo}
        eventId={eventId}
        error={error} />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};
