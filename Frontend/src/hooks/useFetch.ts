import { useEffect } from "react";
import {setError, setLoading, setSuccess} from "../redux/reducer";
import { useDispatch } from "react-redux";

export const useFetch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async ()  => {
      dispatch(setLoading(true));
      try {
        const response = await fetch("http://localhost:3000/projects");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(setSuccess(data));
      } catch (err) {
        dispatch(setError(err.toString()));
        console.log(err);
      }
    };
    getData();
  }, []);
};
