# Embed Workflow Node Demo

![](https://blog.embedworkflow.com/assets/node-js-demo/integrate-with-node-js.png "Node JS and Embed Workflow").

[Live Demo](https://demo.embedworkflow.com/).

This repository demonstrates how easy it is to add Embed Workflow to your node js projects. We will add a few UI components to a simple Next JS application.

Dependencies
- Node.js 14.6.0 or newer
- An Embed Workflow Account. [Sign up for a free account](https://embedworkflow.com/a/users/sign_up).

Resources
- [Original Blog Post](https://blog.embedworkflow.com/posts/node-js-demo/)
- [Embed Workflow API Documentation](https://api-docs.embedworkflow.com)
- [Embed Workflow UI Component Documentation](https://ui-docs.embedworkflow.com)
- [Next JS](https://nextjs.org/docs/)

Check out the original blog post for more details.

## Set Environment Variables

Navigate to your Embed Workflow account settings and copy your publishable and secret keys: https://embedworkflow.com/app/account/api_access

And use the latest UI version: https://embedworkflow.com/ui-version

```yml
EMBED_WORKFLOW_SK=sk_live_12345
EMBED_WORKFLOW_PK=pk_live_12345
EMBED_WORKFLOW_UI_VERSION=1.5.0
```

## How to use

### Start the dev server

```bash
npm run dev
```

```bash
yarn run dev
```
