import Lead from "../models/leadsModel"


const getLeads = async (req, res, next) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    leads: leads,
  })
}

const getLeadById = async (req, res, next) => {
  const lead = await Lead.findById(req.params.id)
  if (!lead) {
    res.status(404).json({ message: "Lead Data not found" })
  }
  res.status(200).json({
    success: true,
    leadData: lead
  })
}

const createLead = async (res, req, next) => {
  const lead = await Lead.create(req.body);
  res.status(201).json({
    success: true,
    message: "New lead added successfully",
    lead: lead
  });
}

const updateLeadStatus = async (req, res, next) => {
  const { status } = req.body;
  const lead = await Lead.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  )

  if (!lead) {
    return res.status(404).json({ message: "Lead not found" });
  }
  res.status(200).json({
    success: true,
    message: "Lead status updated successfully",
    lead: lead
  });
}

const deleteLead = async (req, res, next) => {
  Lead.findByIdAndDelete(req.params.id)
  res.status(204).send()
}

module.exports = { getLeads, getLeadById, createLead, updateLeadStatus, deleteLead }
