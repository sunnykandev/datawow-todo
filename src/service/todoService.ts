import Api from "./Api";

export default {
  async fetchAllTodos() {
    const response = await Api().get(`todos`);
    return response.data;
  },

  async addTask(task: { title: string }) {
    const response = await Api().post(`todos`, task);
    return response.data;
  },
};
