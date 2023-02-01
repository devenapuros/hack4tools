import { getCategories } from "@/database/db";

export default function handler(req, res) {
    res.status(200).json(getCategories());
}
