import Lead from "../models/leadsModel.js"
import Note from "../models/notesModel.js"

export const getStats = async (req, res, next) => {
  try {

    const now = new Date()
    const startOfthisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const startOflastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const endOflastMonth = new Date(now.getFullYear(), now.getMonth(), 0)

    const totalLeads = await Lead.countDocuments()
    const closedLeads = await Lead.countDocuments({ status: "CLOSED" })
    const conversionRate = totalLeads == 0 ? "0%" : ((closedLeads / totalLeads) * 100).toFixed(1) + "%"

    const lastMonthTotal = await Lead.countDocuments({
      createdAt: {
        $gte: startOflastMonth,
        $gte: endOflastMonth,
      }
    })

    const lastMonthClosed = await Lead.countDocuments({
      status: "CLOSED",
      createdAt: {
        $gte: startOflastMonth,
        $gte: endOflastMonth,
      }
    })

    const lastMonthConversion = lastMonthTotal === 0 ? 0 : (lastMonthClosed / lastMonthTotal) * 100

    const thisMonthTotal = await Lead.countDocuments({ createdAt: { $gte: startOfthisMonth } })
    const thisMonthClosed = await Lead.countDocuments({
      status: "CLOSED",
      createdAt: { $gte: startOfthisMonth }
    })
    const thisMonthConversion = thisMonthTotal === 0 ? 0 : (thisMonthClosed / thisMonthTotal) * 100;

    let conversionChange = 0;
    if (lastMonthConversion > 0) {
      conversionChange = ((thisMonthConversion - lastMonthConversion) / lastMonthConversion) * 100
    }

    const formattedChange =
      (conversionChange >= 0 ? "+" : "") +
      conversionChange.toFixed(1) +
      "%";

    const trend = conversionChange >= 0 ? "up" : "down";

    const notes = await Note.find().sort({ createdAt: -1 })
    let averageReportTime = "0h"
    if (notes.length > 0) {
      const firstNote = notes[0]
      const lead = await Lead.findById(firstNote.lead)
      if (lead) {
        const diffMins = new Date(firstNote.createdAt) - new Date(lead.createdAt)
        const hours = (diffMins / (1000 * 60 * 60)).toFixed(1)
        averageReportTime = hours + "h"
      }
    }

    const overallNotes = await Note.countDocuments()

    res.json({
      totalLeads,
      conversionRate,
      responseTime: averageReportTime,
      conversionChange: formattedChange,
      conversionTrend: trend,
      overallNotes
    })
  } catch (error) { next(error) }

}
