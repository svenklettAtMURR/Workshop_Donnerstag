import toaster from "../../services/toastService";

const toast = (store) => (next) => (action) => {
  console.log("action type: ", action.type);
  if (action.type.includes("Failed") & (action.type !== "api/callFailed"))
    toaster.toast.error(
      `${action.payload.label} failed: ${action.payload.errorMsg}`
    );
  else if (action.type.includes("Success")) {
  } else if (action.type.includes("Received")) {
    toaster.toast.success(`${action.payload.label} received!`);
  } else if (action.type.includes("Posted")) {
    toaster.toast.success(`${action.payload.label} posted!`);
  } else if (action.type.includes("Updated")) {
    toaster.toast.success(`${action.payload.label} updated!`);
  }
  return next(action);
};

export default toast;
