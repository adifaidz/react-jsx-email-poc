# What is this ?

A basic POC of sending email using nodemailer  with React/JSX templating + react-email package

# What does this accomplish ?

- No string literals templating, all done using JSX
- A local server to view those templates in browser via react-email
- Better overall experience in building emails

# How to run ?

```bash

# Install packages
pnpm install

# Create .env with values
# In recommend using mailtrap to test

# Once done...
# Build the project
pnpm build

# Run the code
node dist/index.js

# Profit!

```

If you setup correctly, you should be able to see email sent to your smtp server, in this case, mailtrap


# References
- React Email : https://react.email/
- Example project: https://github.com/resendlabs/react-email/tree/main/examples/nodemailer
- Email templates: https://github.com/resendlabs/react-email/tree/main/demo/emails
- Mailtrap : https://mailtrap.io