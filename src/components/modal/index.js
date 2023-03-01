import RCModal from './src/main.vue'

RCModal.install = function(Vue){
    Vue.component(RCModal.name, RCModal);
}

export default RCModal;