import Style from './styles/index.css'

import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'
import Card from './components/card'
import Input from './components/input'

const components = {
    Header,
    Sidebar,
    Main,
    Card,
    Input
}

//组件注册方法
const install = function(Vue, opts = {}) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key])
    })
}

//注册组件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    ...components
}

export default API