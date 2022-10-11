import Api from "./Api";

export default {
  async fetchAllTodos() {
    const response = await Api().get(
      `todos`
    );
    return response.data;
  }
};
