import { showToast } from "nextjs-toast-notify"

export const sucessToast = (message) => {
    console.log(showToast)
    showToast.success(message, {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "slideInUp",
        icon: '',
        sound: true,
    });
}


export const errorToast = (message) => {
    showToast.error(message, {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "swingInverted",
        icon: '',
        sound: true,
    });
}