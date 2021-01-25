import React from "react";
import { Result, Button, Row, Col } from "antd";
import * as Sentry from "@sentry/react";
import { useHistory } from "react-router";

const ErrorPageBoundary = (props) => {
  const history = useHistory();
  const { errorInfo, error, eventId } = props;
  return (
    <Result
      status="warning"
      title={error || "There are some problems with your operation."}
      extra={
        <>
          <Row gutter={[16, 16]} justify={"center"}>
            <Col spn={16}>
              <p>{(errorInfo && errorInfo.componentStack.toString()) || "Error info"}</p>
            </Col>
          </Row>
          <Button
            style={{ width: 160 }}
            type="primary"
            key="err_return-home"
            onClick={() => history.push("/")}>
            Return to Home
          </Button>
          <Button
            style={{ width: 160 }}
            type="primary"
            key="crash-report"
            onClick={() => Sentry.showReportDialog({ eventId })}>
            Create Crash Report
          </Button>
        </>
      }
    />
  );
};

export default ErrorPageBoundary;