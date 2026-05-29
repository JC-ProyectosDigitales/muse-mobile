import {
  getGarments,
} from './garment.service'

async function test() {
  const garments =
    await getGarments()

  console.log(
    'GARMENTS:',
    garments
  )
}

test()