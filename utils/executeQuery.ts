import axios from "axios";
import { toast } from "react-toastify";
import useTableUsers from "@/customHooks/useTableUsers";
export const getAllUsers = (baseURL: string, setPost?: any, post?: any) => {
  console.log("baseURL", baseURL);
  return axios
    .get(baseURL)
    .then((response) => setPost(response.data))
    .catch((error) => {
      console.log("error");
    });
};

export const insertUser = (baseURL: string, data: any) => {
  axios
    .post(baseURL, data)
    .then((response) => {
      toast.success("Usuario creado exitosamente !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
    .catch((error) => {
      toast.error("No se procesó tu solicitud, vuelve a intentarlo !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};

export const deleteUser = (baseURL: string, setPost:any, id:string) => {
  axios
    .delete(baseURL)
    .then((response) => {
      if (response) {
        toast.success("Usuario eliminado exitosamente !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setPost((prevPost: any) => prevPost.filter((user: any) => user.id !== id));
        
      }
    })
    .catch((error) => {
      toast.error("No se procesó tu solicitud, vuelve a intentarlo !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};
export const updateUser = (baseURL: string, data: any, handleClose: any, setPost:any, dataToEdit:any, post:any) => {
  if (data.nombre !== "" && data.fechaNacimiento && data.genero !== "") {

    axios
      .patch(baseURL, data)
      .then((response) => {
        toast.success("Usuario editado exitosamente !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        response && handleClose();
        setTimeout(()=>{
          window.location.reload();
        },2500)
      })
      .catch((error) => {
        toast.error("No se procesó tu solicitud, vuelve a intentarlo !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }else{
    toast.warning("No puedes dejar ningun campo vacio, vuelve a intentarlo !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
