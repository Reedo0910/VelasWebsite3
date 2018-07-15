import Vue from 'vue'
import iziToast from 'izitoast'

iziToast.settings({
    timeout: 5000,
    position: 'bottomRight',
    progressBar: false,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX'
})

export default function install() {
    Object.defineProperties(Vue.prototype, {
        $iziToast: {
            get() {
                return iziToast
            }
        }
    })
}
