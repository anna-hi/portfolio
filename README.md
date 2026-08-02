# Anna Ji — Product Design Portfolio

Anna's portfolio site, featuring product-design case studies that balance thoughtful research, visual craft, and joyful interactions.

## Featured work

- **Faculty Activity Tracker** — Streamlining form completion and scoring workflows for faculty and review committees.
- **Negotium** — Helping women practice negotiation skills through conversational AI.
- **Mindful** — Pairing mindfulness practices with task organization for college students.
- **Penella** — A personalized digital space for emotional expression, mood tracking, and creativity.

## Run locally

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Optional login configuration

The login API checks the `SECRET_CODE` environment variable. To exercise that flow locally, add it to `.env.local`:

```bash
SECRET_CODE=your-local-secret
```

## Testing

Run the Jest unit tests:

```bash
npm test
```

Run the functional Playwright tests. They start the local development server automatically:

```bash
npx playwright install chromium # once per machine
npm run test:e2e
```

For Playwright's interactive UI mode, use `npm run test:e2e:ui`. Run both suites with `npm run test:all`.
