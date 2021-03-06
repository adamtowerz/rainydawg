// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch';

let cache: any = {};
let cacheRefreshTS = 0;
const cacheStaleMs = 1000 * 10; // 10 seconds

async function getSpins() {
  console.info('Making spins network req')
  const res = await fetch(`https://spinitron.com/api/spins`, {
    headers: {
      'Authorization': `Bearer ${process.env.SPIN_API_KEY}`
    }
  })
  return await res.json();
}

async function getShows() {
  console.info('Making spins network req')
  const res = await fetch(`https://spinitron.com/api/shows`, {
    headers: {
      'Authorization': `Bearer ${process.env.SPIN_API_KEY}`
    }
  })
  return await res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (Date.now() > cacheRefreshTS + cacheStaleMs) {
    cacheRefreshTS = Date.now();
    cache.spins = await getSpins();
    cache.shows = await getShows();
  }

  res.status(200).send({ ...cache });
}
