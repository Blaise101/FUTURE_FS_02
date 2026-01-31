import "dotenv/config";   // 👈 IMPORTANT
import app from "./app.js";
import { connectDB } from "./config/db.js";
import leadsRoutes from "./routes/leadsRoute.js";

connectDB();

app.use("/api/leads", leadsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 CRM API running on port ${PORT}`)
);
