import toast, {ToastPosition} from "react-hot-toast";
import IconCheck from "@/components/icons/iconCheck";
import React from "react";
import IconClose from "@/components/icons/iconClose";

export const generateSuccessToast = (text: string, placement: ToastPosition = "bottom-right") => {
    toast(text, {
        duration: 7000,
        position: placement,
        style: {
            borderRadius: '8px',
            background: '#06C270',
            color: '#fff',
            zIndex: 1000
        },
        // Custom Icon
        icon: <IconCheck className={"h-4 fill-white"}/>,

        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}

export const generateErrorToast = (error: string, placement: ToastPosition = "bottom-right") => {
    toast(error, {
        duration: 7000,
        position: placement,
        style: {
            borderRadius: '8px',
            background: '#FF5C5C',
            color: '#fff',
            zIndex: 1000
        },
        // Custom Icon
        icon: <IconClose className={"pt-[24px] h-4 fill-white flex-shrink-0"}/>,

        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}
export const generateStatusToast = (status: string, placement: ToastPosition = "bottom-right") => {
    toast(status, {
        duration: 7000,
        position: placement,
        style: {
            borderRadius: '8px',
            background: '#292A2D',
            color: '#fff',
            zIndex: 1000
        },
        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}
