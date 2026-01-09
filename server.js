import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';

const app = express();
app.use(cors());
app.use(express.json());

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

if (!keyId || !keySecret) {
  console.error('Razorpay keys missing. Ensure .env has RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET');
} else {
  const masked = keyId.length > 6 ? `${keyId.slice(0, 6)}...${keyId.slice(-4)}` : keyId;
  console.log(`Using Razorpay key: ${masked}`);
}

const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt = 'rcpt_' + Date.now(), notes } = req.body || {};
    if (!amount) return res.status(400).json({ error: 'amount is required' });

    const order = await razorpay.orders.create({ amount, currency, receipt, notes });
    return res.json({ order });
  } catch (err) {
    console.error('Create order error:', err);
    const status = err?.statusCode === 401 ? 401 : 500;
    return res.status(status).json({ error: err?.error?.description || 'Failed to create order' });
  }
});

app.get('/api/health', (_req, res) => {
  const masked = keyId ? (keyId.length > 6 ? `${keyId.slice(0, 6)}...${keyId.slice(-4)}` : keyId) : 'none';
  res.json({
    ok: true,
    razorpayKeyId: masked,
    secretPresent: Boolean(keySecret),
  });
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on http://0.0.0.0:${PORT}`));


