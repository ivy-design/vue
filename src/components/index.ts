import type { App, Component } from "vue";
import Icon from "./icon/index";
import Button from "./button/index";
import Tag from "./tag/index";
import Divider from "./divider/index";

const components: Component[] = [Icon, Button, Tag, Divider];

export { Icon, Button, Tag, Divider };

export default (app: App) => {
    components.forEach(comp => {
        app.component(comp.name as string, comp);
    });
};
