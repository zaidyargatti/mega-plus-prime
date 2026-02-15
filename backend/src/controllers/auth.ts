import {type Request,type Response } from "express";

export const adminLogin = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    return res.json({ success: true });
  }

  return res
    .status(401)
    .json({ success: false, message: "Invalid Credentials" });
};
