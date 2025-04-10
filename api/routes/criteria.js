const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');

// [GET] /api/criteria
router.get('/', async (req, res) => {
    try {
      const criteriaList = await prisma.criteria.findMany({
        select: {
            criteriaId: true,
            criteriaName: true,
            weight: true,
            type: true,
        }
      });
  
      res.status(200).json(criteriaList);
    } catch (error) {
      console.error('Fetch error:', error);
      res.status(400).json({ error: 'Failed to fetch criteria' });
    }
  });

module.exports = router;