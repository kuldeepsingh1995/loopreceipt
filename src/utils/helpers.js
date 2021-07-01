import { toast } from "react-toastify";

export const imgUrl =
  "https://th.bing.com/th/id/R6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw";

export const showSuccessMessage = (message) => {
  return toast.success(message, {
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    autoClose: 2000,
  });
};

export const showErrorMessage = (error) => {
  return toast.error(error, {
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    autoClose: 2000,
  });
};

export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getFromLocalStorage = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
