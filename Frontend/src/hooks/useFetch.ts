import { useEffect } from "react";
import { setError, setLoading, setSuccess } from "../redux/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";

export const useFetch = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get("https://portfolio-fc8l.onrender.com/projects");
        dispatch(setSuccess(res.data));
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
