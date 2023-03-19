import cors from "cors";
import express from "express";

import { envConfig } from "@config/env";
import { connectDB, sequelize } from "@db/index";
import routes from "@routes/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

app.listen(envConfig.PORT, async () => {
  // eslint-disable-next-line no-console
  console.log("🚀Server started Successfully");
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    // eslint-disable-next-line no-console
    console.log("✅Synced database successfully...");
  });
});
export default app;
