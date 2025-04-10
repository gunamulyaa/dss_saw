const { PrismaClient, CriteriaType } = require('../generated/prisma');

const prisma = new PrismaClient()

async function main() {
  await prisma.criteria.createMany({
    data: [
      {
        criteriaName: 'Harga Premi',
        type: CriteriaType.COST,
        weight: 0.20,
      },
      {
        criteriaName: 'Jumlah Pertanggungan',
        type: CriteriaType.BENEFIT,
        weight: 0.15,
      },
      {
        criteriaName: 'Masa Tunggu Klaim',
        type: CriteriaType.COST,
        weight: 0.10,
      },
      {
        criteriaName: 'Cakupan Perlindungan',
        type: CriteriaType.BENEFIT,
        weight: 0.10,
      },
      {
        criteriaName: 'Limit Kunjungan/Tahun',
        type: CriteriaType.BENEFIT,
        weight: 0.15,
      },
      {
        criteriaName: 'Rumah Sakit Rekanan',
        type: CriteriaType.BENEFIT,
        weight: 0.10,
      },
      {
        criteriaName: 'Proses Klaim',
        type: CriteriaType.COST,
        weight: 0.20,
      },
    ],
  })

  // criteria = await prisma.criteria.findFirst({
  //   where: {
  //     criteriaName: 'Proses Klaim'
  //   }
  // })

  // await prisma.criteria.createMany({
  //   data: [
  //     {
  //       criteriaName: 'Lama Proses',
  //       type: CriteriaType.COST,
  //       weight: 0.60,
  //       parentCriteriaId: criteria.criteriaId
  //     },
  //     {
  //       criteriaName: 'Dokumen Pendukung',
  //       type: CriteriaType.COST,
  //       weight: 0.40,
  //       parentCriteriaId: criteria.criteriaId
  //     },
  //   ],
  // })

  console.log('✅ Seed success!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })