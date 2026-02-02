import "dotenv/config";   // 👈 IMPORTANT
import app from "./app.js";
import { connectDB } from "./config/db.js";
import leadsRoutes from "./routes/leadsRoute.js";
import notesRoutes from "./routes/notesRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";

connectDB();

app.use("/api/leads", leadsRoutes);

app.use("/api/leads/:leadId/notes", notesRoutes);

app.use("/api/stats", statsRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 CRM API running on port ${PORT}`)
);
