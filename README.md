# Micro Stripe Charge

## Development

Install dependencies

```bash
yarn
```

Set the `STRIPE_SECRET_KEY` `env`

```bash
export STRIPE_SECRET_KEY=...
```

Run `micro-dev` server

```bash
yarn dev
```

Send a request to `http://localhost:3000` including the following payload

```bash
{
	"amount": 999,
  "currency": "gbp",
  "description": "Example charge",
  "source": "tok_visa"
}
```
