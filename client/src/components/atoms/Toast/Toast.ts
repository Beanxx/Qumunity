import Swal from "sweetalert2"
import "./Toast.css"

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  width: "370px",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer)
    toast.addEventListener("mouseleave", Swal.resumeTimer)
  },
})

export default Toast
