declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'ant-design-vue' {
  const Ant: any
  export default Ant;
}

declare module 'ant-design-vue/lib/message' {
  import { Message } from 'ant-design-vue/types/message';
  const message: Message;
  export default message;
}
