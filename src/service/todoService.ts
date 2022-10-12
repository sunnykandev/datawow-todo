import Api from "./Api";

export default {
  async fetchAllTodos() {
    const response = await Api().get(`todos`);
    return response.data;
  },

  async addTask(task: { title: string; completed: boolean }) {
    const response = await Api().post(`todos`, task);
    return response.data;
  },

  async editTask(task: { id: string; title: string; completed?: boolean }) {
    const response = await Api().put(`todos/${task.id}`, task);
    return response.data;
  },

  async removeTask(id: string) {
    const response = await Api().delete(`todos/${id}`);
    return response;
  },
};
