// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const baseUrl = "https://lichess.org";


export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  const fen = "rnbqkbnr/ppp1pppp/8/3pP3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2";
  let data; 


  try {
    data = await axios.get(`${baseUrl}/api/cloud-eval?fen=${fen}`);
  } catch (err:any) {
    res.status(500).send(err);
  }

  res.send(data?.data);
}
