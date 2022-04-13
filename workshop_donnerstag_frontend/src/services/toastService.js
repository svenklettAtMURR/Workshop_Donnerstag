import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * possible post positions
 */
const position = {
  topLeft: "top-left",
  topRight: "top-right",
  topCenter: "top-center",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
  bottomCenter: "bottom-center",
};

const toaster = {
  toast: {
    /**
     * Info toast
     *
     * @param {string} msg
     * @param {position} pos
     */
    info: function (msg = "", pos = position.topRight) {
      toast.info(`Info: ${msg}`, {
        position: pos,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    /**
     * Success toast
     *
     * @param {string} msg
     * @param {position} pos
     */
    success: function (msg = "", pos = position.topRight) {
      toast.success(msg, {
        position: pos,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    /**
     * Warning toast
     *
     * @param {string} msg
     * @param {position} pos
     */
    warn: function (msg = "", pos = position.topRight) {
      toast.warn(`Warning: ${msg}`, {
        position: pos,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    /**
     * Error toast
     *
     * @param {string} msg
     * @param {position} pos
     */
    error: function (msg = "", pos = position.topRight) {
      toast.error(msg, {
        position: pos,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    /**
     * default toast
     *
     * @param {string} msg
     * @param {position} pos
     */
    function(msg = "", pos = position.topRight) {
      toast(`Default: ${msg}`, {
        position: pos,
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },

  /**
   * Toast container.
   * To be included in the render function of the component which the toast should be rendered
   *
   * @returns toast container to be rendered
   */
  Container: function () {
    return (
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    );
  },
};

export default toaster;
