import { useState } from "react";
import LeadsList from "../partials/LeadsList";
import LeadsDetails from "../partials/LeadsDetails";

export default function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="leads">
      {selectedLead ? (
        <LeadsDetails
          lead={selectedLead}
          onBack={() => setSelectedLead(null)}
        />
      ) : (
        <LeadsList onSelect={(lead) => setSelectedLead(lead)} />
      )}
    </div>
  );
}
