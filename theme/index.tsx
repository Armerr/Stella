// theme/index.tsx
import {Root} from "./components/root/Root.tsx";

function Layout() {
    return (
        <Root></Root>
    );
}

// setup 函数，会在页面初始化时调用，一般用来做全局事件的监听，可为空函数
const setup = () => {
};

// 导出默认主题的所有内容，这样才能保证你的主题配置能够正常工作
export * from 'rspress/theme';

// 导出 Layout 组件和 setup 函数
// 两者必须导出
export default {Layout, setup};