import { useEffect, useState } from "react";
import LeadsList from "../partials/LeadsList";
import LeadsDetails from "../partials/LeadsDetails";

export default function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.leads); // make sure your backend returns { leads: [...] }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="leads">
      {selectedLead ? (
        <LeadsDetails
          lead={selectedLead}
          onBack={() => setSelectedLead(null)}
        />
      ) : (
        <LeadsList
          leads={leads}
          onSelect={(lead) => setSelectedLead(lead)}
        />
      )}
    </div>
  );
}
