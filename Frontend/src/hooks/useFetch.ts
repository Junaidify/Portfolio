import { useEffect } from "react";
import { setError, setLoading, setSuccess } from "../redux/reducer";
import { useDispatch } from "react-redux";

export const useFetch = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch("https://portfolio-fc8l.onrender.com/projects");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(setSuccess(data));
      } catch (err) {
        dispatch(setError(false));
        console.log(err);
      } finally {
        dispatch(setLoading(false));
      }
    };
    getData();
  }, [dispatch]);
}
