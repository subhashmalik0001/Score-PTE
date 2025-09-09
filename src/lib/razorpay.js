// Lightweight Razorpay Checkout loader and opener for client-side use

let razorpayScriptLoadingPromise = null;

export function loadRazorpayScript() {
  if (typeof window === 'undefined') return Promise.reject(new Error('Window is not available'));
  if (window.Razorpay) return Promise.resolve(true);
  if (razorpayScriptLoadingPromise) return razorpayScriptLoadingPromise;

  razorpayScriptLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error('Failed to load Razorpay'));
    document.body.appendChild(script);
  });

  return razorpayScriptLoadingPromise;
}

export async function openRazorpayCheckout({
  amountPaise,
  currency = 'INR',
  name = 'Payment',
  description = '',
  image,
  orderId,
  prefill,
  notes,
  themeColor = '#000000',
  onSuccess,
  onDismiss,
  onError,
}) {
  try {
    await loadRazorpayScript();

    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!key) throw new Error('Missing VITE_RAZORPAY_KEY_ID');

    const options = {
      key,
      amount: amountPaise,
      currency,
      name,
      description,
      image,
      order_id: orderId,
      handler: (response) => onSuccess?.(response),
      modal: { ondismiss: () => onDismiss?.() },
      prefill,
      notes,
      theme: { color: themeColor },
      method: {
        netbanking: true,
        wallet: true,
        upi: true,
        card: true,
        emi: true,
        paylater: true,
      },
    };

    const rz = new window.Razorpay(options);
    rz.on('payment.failed', (response) => {
      onError?.(response);
      try { alert('Payment failed. Please try again.'); } catch {}
    });
    rz.open();
    return true;
  } catch (err) {
    onError?.(err);
    try { alert(err?.message || 'Failed to initialize payment'); } catch {}
    throw err;
  }
}
