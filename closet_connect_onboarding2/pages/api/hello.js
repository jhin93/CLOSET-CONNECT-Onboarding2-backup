// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async function handler(req, res) {
  const creatorList = await axios.get('https://test-connect.api.clo-set.com/api/Social/354/Followers')
  console.log("----- creatorList(hello.js) : ", creatorList.data)
  res.status(200).json(creatorList.data)
}
