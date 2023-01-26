import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

type Data = {
  name: string,
  email: string,
  phone: string,
  userId: number,
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const lead = await prisma.lead.create({
    data: {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      userId: +req.body.userId,
      executionHashid: req.body.executionHashid,
    },
  })

  res.status(200).json(lead)
}
