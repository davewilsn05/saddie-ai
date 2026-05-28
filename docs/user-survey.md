# TRL/Active User Survey

## What Else To Consider

- **Activation clarity**: users may leave before judging the product if the first plan setup is unclear.
- **Retention drivers**: ask what would make them keep using the app, not only whether they like it today.
- **Recommendation intent**: a short recommend question helps identify whether satisfaction is strong enough for growth.
- **Pricing sensitivity**: ask for a concrete monthly price range, but avoid making the survey feel like a sales form.
- **Feature priority**: force users to choose the next improvement area so feedback is easier to act on.
- **Consent and deliverability**: email all users only if the database list is allowed to receive product feedback emails, and include unsubscribe/preferences if needed.

## Required Environment Variables

```text
SUPABASE_URL=https://...
SUPABASE_SERVICE_ROLE_KEY=...
RESEND_API_KEY=...
RESEND_FROM=TRLActive <survey@trlactive.com>
SURVEY_NOTIFY_EMAIL=info@trlactive.com
SURVEY_SEND_SECRET=...
SURVEY_SITE_ORIGIN=https://trlactive.com
SURVEY_SEND_LIMIT=500
ADMIN_SURVEY_TOKEN=...
```

## Supabase Table

Create this table before launching the survey:

```sql
create table if not exists public.user_surveys (
  id uuid primary key default gen_random_uuid(),
  email text,
  source text not null default 'site',
  answers jsonb not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists user_surveys_email_idx on public.user_surveys (email);
create index if not exists user_surveys_created_at_idx on public.user_surveys (created_at desc);
```

## Routes

- Public survey page: `/survey`
- Survey submit API: `POST /api/survey`
- Admin results page: `/admin?token=YOUR_ADMIN_SURVEY_TOKEN`
- Preview survey email: `POST /api/survey/preview`
- Optional direct send to Supabase auth users: `POST /api/survey/send`

## Resend Audience Send

Use Resend Broadcasts for the real customer send:

1. Go to Resend Audience and confirm the contacts are opted in to receive product feedback emails.
2. Create or choose the Segment that should receive the survey.
3. Create a Broadcast to that Segment.
4. Use the survey link `https://trlactive.com/survey?utm_source=resend&utm_medium=email&utm_campaign=user_survey`.
5. Include Resend's unsubscribe footer or unsubscribe link.
6. Send a test to `d.wilson@trlactive.com`, then schedule or send the Broadcast.

Resend Broadcasts provide audience-level unsubscribe handling and performance metrics. The site stores completed survey responses in Supabase and shows them in `/admin`.

## Tracking

Resend open and click tracking is configured on the sending domain, not in this survey code. Enable tracking in Resend under Domains, then configure the tracking subdomain DNS record. The survey link also includes `utm_source`, `utm_medium`, and `utm_campaign`, and completed responses store that source string.

Open tracking is directional because some mail clients block or preload tracking pixels. Treat completed surveys and click-throughs as the stronger signal.

## Preview Email

Send the exact survey invitation preview to `d.wilson@trlactive.com` with:

```bash
curl -X POST https://trlactive.com/api/survey/preview \
  -H "Authorization: Bearer $SURVEY_SEND_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"email":"d.wilson@trlactive.com"}'
```

Call the optional direct send endpoint with:

```bash
curl -X POST https://trlactive.com/api/survey/send \
  -H "Authorization: Bearer $SURVEY_SEND_SECRET"
```
