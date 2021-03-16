import { Toast } from 'native-base';

export function DangerToast(errors, duration = 5000) {
    return Toast.show({
        text: `${errors.join(" \n")}`,
        buttonText: "Dismiss",
        type: "danger",
        position: "top",
        style:{marginTop: 50},
        duration
      })
}

export function SuccessToast(message, duration = 5000) {
    return Toast.show({
        text: `${message}`,
        buttonText: "Okay",
        type: "success",
        position: "top",
        style:{marginTop: 50},
        duration
      })
}

export function WarningToast(message, duration = 5000) {
    return Toast.show({
        text: `${message}`,
        buttonText: "Okay",
        type: "warning",
        position: "top",
        style:{marginTop: 50},
        duration
      })
}

export function InfoToast(message, duration = 5000) {
    return Toast.show({
        text: `${message}`,
        buttonText: "Okay",
        position: "top",
        style:{marginTop: 50},
        duration
      })
}