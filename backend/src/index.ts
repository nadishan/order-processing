import express, { Application } from "express";
import cors from "cors";

import orderRoutes from "./routes/orderRoutes";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/order", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});