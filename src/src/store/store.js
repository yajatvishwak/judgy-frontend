import { writable } from "svelte/store";

const store = writable({ isAddModalOpen: false, isAddCSVModalOpen: false });
export default store;
