import api from './api';

export const routineService = {
  getMyRoutines: async () => {
    const response = await api.get('/routines/my-routines');
    return response.data;
  },

  getPublicRoutines: async () => {
    const response = await api.get('/routines/public');
    return response.data;
  },

  getRoutine: async (id) => {
    const response = await api.get(`/routines/${id}`);
    return response.data;
  },

  createRoutine: async (routineData) => {
    const response = await api.post('/routines', routineData);
    return response.data;
  },

  updateRoutine: async (id, routineData) => {
    const response = await api.put(`/routines/${id}`, routineData);
    return response.data;
  },

  deleteRoutine: async (id) => {
    const response = await api.delete(`/routines/${id}`);
    return response.data;
  },

  likeRoutine: async (id) => {
    const response = await api.post(`/routines/${id}/like`);
    return response.data;
  }
}; 