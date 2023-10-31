import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const my_alert = (mensaje,icono,foco='') => {
    onFocus(foco)
    const MyAlert = withReactContent(Swal)
    MyAlert.fire({
        title:mensaje,
        icon:icono
    })
}

const onFocus = (foco) => {
    if(foco){
        document.getElementById(foco).focus()
    }
}