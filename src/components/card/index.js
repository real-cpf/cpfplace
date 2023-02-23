import RCCard from './src/main.vue'

RCCard.install = function(Vue){
    Vue.component(RCCard.name, RCCard);
}

export default RCCard;