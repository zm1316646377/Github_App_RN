/**
 * 全局导航跳转工具
 */

export default class NavigationUtil {

    static back(params) {
        const { navigation } = params
        navigate.goBack()
    }

    static resetToHomePage(params) {
        const { navigation } = params
        navigation.navigate('Main')
    }

}