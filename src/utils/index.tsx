import { toast, ToastOptions } from 'react-toastify';

export enum ToastTypes {
    SUCCESS = 'succes',
    ERROR = 'error',
    INFO = 'info',
    WARNING = 'warning',
}

export const showToast = (message: string, type: ToastTypes) => {
    const options: ToastOptions = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
        draggable: true,
        progress: undefined,
    };
    switch (type) {
        case ToastTypes.SUCCESS:
            toast.success(message, options);
            break;
        case ToastTypes.ERROR:
            toast.error(message, options);
            break;
        default:
            toast.info(message, options);
            break;
    }
};
