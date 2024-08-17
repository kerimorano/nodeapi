import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/example', (req: Request, res: Response) => {
    res.json({ message: 'Example route' });
});
router.post('/deneme', (req: Request, res: Response) => {
    console.log('Merhaba Dünya');
    console.log('Gönderilen veri:', req.body); // Gönderilen veriyi konsola yazdır
    res.json({ message: 'POST isteği başarılı!', receivedData: req.body }); // İstemciye JSON yanıt gönder
});


export default router;
