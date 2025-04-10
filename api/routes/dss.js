const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');

// [POST] /api/dss : save criteria-alternative value
router.post('/', async (req, res) => {
    try {
      const data = req.body;

      console.log(data);
    
      if (!Array.isArray(data)) {
        return res.status(400).json({ error: 'Request body harus berupa array' });
      }
  
      // create new dss
      const newDss = await prisma.dss.create({
        data: {
          creator: `IP: ${req.ip} | UA: ${req.get('User-Agent')}`,
        }
      });

      for (const item of data) {
        const newDssAlternative = await prisma.dssAlternative.create({
          data: {
            dssId: newDss.dssId,
            name: item.alternativeName,
            sValue: parseFloat(item.sValue),
            rankValue: item.rankValue,
          }
        });
      
        for (const [key, value] of Object.entries(item)) {
          if (
            key !== 'alternativeName' &&
            key !== 'sValue' &&
            key !== 'rankValue' &&
            key !== 'id'
          ) {
            const criteria = await prisma.criteria.findFirst({
              where: {
                criteriaName: mapCriteriaName[key]
              }
            });
      
            if (criteria) {
              await prisma.dssCriteriaAlternative.create({
                data: {
                  dssId: newDss.dssId,
                  dssAlternativeId: newDssAlternative.dssAlternativeId,
                  criteriaId: criteria.criteriaId,
                  value: parseFloat(value),
                }
              });
            }
          }
        }
      }
      
        res.status(201).json({ message: `dss data saved`, dssId: newDss.dssId});
      } catch (error) {
        console.error('Batch create error:', error);
        res.status(400).json({ error: 'Failed to save dss' });
      }
  });

module.exports = router;

const mapCriteriaName = {
    'insurancePremium': 'Harga Premi',
    'coverageAmount': 'Jumlah Pertanggungan',
    'waitingPeriode': 'Masa Tunggu Klaim',
    'coverageType': 'Cakupan Perlindungan',
    'annualVisitLimit': 'Limit Kunjungan/Tahun',
    'partnerHospitals': 'Rumah Sakit Rekanan',
    'claimProcess': 'Proses Klaim',
    'processDay': 'Lama Proses',
    'requiredDocuments': 'Dokumen Pendukung',
  };