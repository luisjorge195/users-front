import axios from "axios";
import { toast } from "react-toastify";
import useTableUsers from "@/customHooks/useTableUsers";
export const getAllUsers = (baseURL: string, setPost?:any, post?:any)=>{
  return axios.get(baseURL).then((response)=> setPost(response.data)).catch((error)=>{console.log('error')})
}


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

export const deleteUser = (baseURL: string) => {
  axios
    .delete(baseURL)
    .then((response) => {
        if(response){
          toast.success("Usuario eliminado exitosamente !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(()=>{
            window.location.reload()
          },2000)
         
        }
    })
    .catch((error) => {
      toast.error("No se procesó tu solicitud, vuelve a intentarlo !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};
export const updateUser = (baseURL: string, data:any, handleClose:any) => {
    axios
      .patch(baseURL, data)
      .then((response) => {
        toast.success("Usuario editado exitosamente !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        response && handleClose()
        setTimeout(()=>{
          window.location.reload()
        },2300)
      })
      .catch((error) => {
        toast.error("No se procesó tu solicitud, vuelve a intentarlo !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
