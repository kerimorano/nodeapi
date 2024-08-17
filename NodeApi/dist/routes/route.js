"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/example', (req, res) => {
    res.json({ message: 'Example route' });
});
router.post('/deneme', (req, res) => {
    console.log('Merhaba Dünya');
    console.log('Gönderilen veri:', req.body); // Gönderilen veriyi konsola yazdır
    res.json({ message: 'POST isteği başarılı!', receivedData: req.body }); // İstemciye JSON yanıt gönder
});
exports.default = router;
