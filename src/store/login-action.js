
import { dataActions } from "./data-slice";
import { uiActions } from "./ui-slice";


export const fetchLoginData = () => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading(true));
    dispatch(dataActions.setError(null));

    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-c8f4f-default-rtdb.firebaseio.com/login.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch login data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const loginData = await fetchData();
      dispatch(dataActions.setFetchData(loginData));
      dispatch(dataActions.setLoading(false));
    } catch (error) {
      dispatch(dataActions.setLoading(false));
      dispatch(dataActions.setError('error'));
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching login data failed",
        })
      );
    }
  };
};

export const sendLoginData = (loginData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending login data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-c8f4f-default-rtdb.firebaseio.com/login.json",
        {
          method: "PUT",
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
        throw new Error("Sending login data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sending login data successful",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending login data failed",
        })
      );
    }
  };
};
