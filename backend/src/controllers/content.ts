import {type Request,type Response } from "express";
import Content from "../models/content";

// GET content
export const getContent = async (_: Request, res: Response) => {
  const data = await Content.findOne();
  res.json(data);
};

export const updateContent = async (req: Request, res: Response) => {
  const updated = await Content.findOneAndUpdate(
    {},
    req.body,
    { upsert: true, new: true }
  );

  res.json(updated);
};
