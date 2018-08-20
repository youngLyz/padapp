import Vue from 'vue'
import * as ModalDialogs from 'vue-modal-dialogs'

import MessageComponent from 'comp/Message.vue'
import ConfirmMessage from 'comp/ConfirmMessage.vue'

Vue.use(ModalDialogs);

export const showMsg = ModalDialogs.create(MessageComponent,'content');
export const confirmMsg = ModalDialogs.create(ConfirmMessage,'title','content');

Vue.prototype.$showMsg = showMsg;
Vue.prototype.$confirmMsg = confirmMsg;