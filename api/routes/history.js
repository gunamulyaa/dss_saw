const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');

// [GET] /api/history : get history list
router.get('/', async (req, res) => {
    try {
      const criteriaList = await prisma.criteria.findMany({
        include: {
          childCriterias: true
        }
      });
  
      res.status(200).json(criteriaList);
    } catch (error) {
      console.error('Fetch error:', error);
      res.status(500).json({ error: 'Failed to fetch criteria' });
    }
  });

module.exports = router;