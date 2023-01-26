# Embed Workflow Node Demo

![](https://blog.embedworkflow.com/assets/node-js-demo/integrate-with-node-js.png "Node JS and Embed Workflow")

This repository demonstrates how easy it is to add Embed Workflow to your node js projects. We will add a few UI components to a simple Next JS application.

Dependencies
- Node.js 14.6.0 or newer
- An Embed Workflow Account. [Sign up for a free account](https://embedworkflow.com/a/users/sign_up).

Resources
- [Original Blog Post](https://embedworkflow.com/posts/node-js-demo/)
- [Embed Workflow API Documentation](https://api-docs.embedworkflow.com)
- [Embed Workflow UI Component Documentation](https://ui-docs.embedworkflow.com)
- [Next JS](https://nextjs.org/docs/)
- [Prisma](https://www.prisma.io/docs)

Check out the original blog post for more details.

## Set Environment Variables

Navigate to your Embed Workflow account settings and copy your publishable and secret keys. I recommend using `pk_test` and `sk_test`.

```yml
EMBED_WORFKLOW_SK=sk_test_12345
EMBED_WORFKLOW_PK=pk_test_12345
```

## Update Your Form ID

You will need a workflow already set up before we embed. Copy your `id` and update `REPLACE_ME_WITH_YOUR_FORM_ID`.

**Note: [Check the latest link and script URLs here](https://embedworkflow.com/ui-version).**

## Update Your Slack Webhook URL

Update `REPLACE_ME_WITH_YOUR_SLACK_WEBHOOK_URL` with your Slack webhook URL. [Read more on configuring Slack](https://blog.embedworkflow.com/posts/integrate-with-slack/).


## How to use

### Migrate the database

```bash
npx prisma migrate dev
```

### Start the dev server

```bash
npm run dev
```

```bash
yarn run dev
```
