import { getToolById } from "@/database/db";

export default function handler(req, res) {
    const id = req.query.id;
    const tool = getToolById(id);
    if (tool) res.status(200).json(tool);
    else res.status(404).json({ statusText: "Tool not found" });
}
