const API_URL = "https://future-fs-02-backend-i014.onrender.com/api";

export const getLeads = async () => {
  const res = await fetch(`${API_URL}/leads`);
  return res.json();
};

export const createLead = async (leadData) => {
  const res = await fetch(`${API_URL}/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });

  return res.json();
};

export const updateLeadStatus = async (id, status) => {
  const res = await fetch(`${API_URL}/leads/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return res.json();
};
