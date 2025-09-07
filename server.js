import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';

const app = express();
app.use(cors());
app.use(express.json());

const keyId = process.env.VITE_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.VITE_RAZORPAY_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET;
const keySource = process.env.VITE_RAZORPAY_KEY_ID ? 'VITE_RAZORPAY_*' : (process.env.RAZORPAY_KEY_ID ? 'RAZORPAY_*' : 'missing');

if (!keyId || !keySecret) {
  console.error('Razorpay keys missing. Ensure .env has RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET (or VITE_ variants)');
} else {
  const masked = keyId.length > 6 ? `${keyId.slice(0, 6)}...${keyId.slice(-4)}` : keyId;
  console.log(`Using Razorpay key: ${masked} (source: ${keySource})`);
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
    keySource,
    secretPresent: Boolean(keySecret),
  });
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));


