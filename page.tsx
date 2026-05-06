const BASE_URL = "http://localhost:8001";

export const BIOS_API = {
  // GET: Read Data
  getProjects: async () => {
    const res = await fetch(`${BASE_URL}/projects`);
    return res.json();
  },

  // POST: Send Data
  createProject: async (data: any) => {
    const res = await fetch(`${BASE_URL}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.status === 201 ? res.json() : null;
  },

  // PUT: Replace
  replaceProject: async (id: number, data: any) => {
    const res = await fetch(`${BASE_URL}/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // PATCH: Partial Update
  updateStatus: async (id: number, status: string) => {
    const res = await fetch(`${BASE_URL}/projects/${id}?status_update=${status}`, {
      method: "PATCH",
    });
    return res.json();
  },

  // DELETE: Remove
  removeProject: async (id: number) => {
    await fetch(`${BASE_URL}/projects/${id}`, { method: "DELETE" });
  }
};