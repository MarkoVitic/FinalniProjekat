import { expressjwt } from "express-jwt";

const authMiddelware = expressjwt({
  secret: "NEKINASkljuc",
  algorithms: ["HS256"],
  requestProperty: "userData",
});
export default authMiddelware;
