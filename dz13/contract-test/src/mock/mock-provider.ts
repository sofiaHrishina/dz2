import express from 'express';
const app = express();
app.use(express.json());

let lastOrder: any = null;

app.post('/v2/store/order', (req, res) => {
    lastOrder = req.body;
    res.status(200).json(lastOrder);
});

app.get('/v2/store/order/:id', (req, res) => {
    if (lastOrder && lastOrder.id == req.params.id) {
        res.status(200).json(lastOrder);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

app.listen(8080, () => {
    console.log('Mock Order Provider running on http://localhost:8080');
});
