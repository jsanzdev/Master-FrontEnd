import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Modal } from "@mui/material";
import Loader from "react-spinners/ScaleLoader";
import * as classes from "./spinner.styles";

export const SpinnerComponent: React.FunctionComponent = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <Modal open={promiseInProgress} className={classes.modal}>
      <div className={classes.loaderContainer} data-testid="loader-container">
        <Loader />
      </div>
    </Modal>
  );
};
