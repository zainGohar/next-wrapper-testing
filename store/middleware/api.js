import axios from "axios";
import * as actions from "../api";
axios.defaults.withCredentials = true;axios.defaults.withCredentials = true;
// const action = {
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     method: "post",
//     data: {},
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// };

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    // console.log(action);
    if (action.type !== actions.apiCallBegan.type) return next(action);
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    console.log(data);

    let axiosConfig = {
      withCredentials: true,
    }
    try {
      const response = await axios.request({
        baseURL: "http://localhost:30007/",
        url, // its the url of our end point, its not the complete url , For that you need a base url.
        method,
        data,
        axiosConfig
      });
      console.log(data);

      dispatch(actions.apiCallSuccess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      //general
      dispatch(actions.apiCallFailed(error));
      console.log(error);
      //Specifig
      if (onError) dispatch({ type: onError, payload: error });
    }
  };

export default api;
