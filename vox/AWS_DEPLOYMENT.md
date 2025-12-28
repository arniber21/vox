# AWS Deployment Guide

Your application is now configured for production. Follow these steps to complete the deployment on AWS.

## 1. AWS Resources Setup
Before deploying, ensure you have these resources ready:

-   **AWS RDS (PostgreSQL)**: Ensure it is publically accessible (or in the same VPC as Amplify if configured) and you have the connection string.
-   **AWS S3 Bucket**: Create a bucket (e.g., `vox-media-prod`).
    -   **Permissions**: Ensure the bucket has a policy allowing public read access if you want images to be public, or configure CloudFront.
    -   **CORS**: Allow GET/PUT/POST from your Amplify domain.
-   **AWS SES**: Verify your domain or sender email (e.g., `admin@yourdomain.com`) in the SES Console to allow sending emails.
-   **IAM User**: Create an IAM user with permissions for S3 (read/write to the bucket) and SES (send email). Get the Access Key ID and Secret Access Key.

## 2. Amplify Console Configuration
Go to your App Settings in the AWS Amplify Console and add the following **Environment Variables**:

### Database
-   `DATABASE_URI`: `postgresql://username:password@your-rds-endpoint.us-east-1.rds.amazonaws.com:5432/dbname`

### General
-   `PAYLOAD_SECRET`: A long random string (e.g. `openssl rand -base64 32`).
-   `NEXT_PUBLIC_SERVER_URL`: Your Amplify app URL (e.g., `https://main.d12345.amplifyapp.com`).

### Storage (S3)
-   `S3_BUCKET`: Your bucket name (e.g. `vox-media-prod`).
-   `S3_REGION`: Bucket region (e.g. `us-east-1`).
-   `S3_ACCESS_KEY_ID`: IAM User Access Key.
-   `S3_SECRET_ACCESS_KEY`: IAM User Secret Key.

### Email (SES)
-   `SMTP_HOST`: `email-smtp.us-east-1.amazonaws.com` (Change region if needed).
-   `SMTP_USER`: SES SMTP Username (generated in SES console, NOT the IAM access key).
-   `SMTP_PASS`: SES SMTP Password.
-   `SMTP_FROM_ADDRESS`: Verified sender email (e.g. `admin@yourdomain.com`).
-   `SMTP_FROM_NAME`: "VOX Admin" (optional).

### Production Seeding (Optional)
To automatically seed your admin accounts on first run:
-   `SEED_DEV_1_EMAIL`: `your.email@example.com`
-   `SEED_DEV_1_PASSWORD`: `SecurePassword123`
-   `SEED_ADMIN_POC_EMAIL`: `poc@example.com`
...and others as defined in `.env.example`.

## 3. Deploy
1.  Push your changes to the connected git branch (e.g. `main`).
2.  Amplify will automatically trigger a build using the new `amplify.yml`.
3.  Monitor the build logs.

## 4. Post-Deploy Verification
1.  **Seed**: If you configured the seed variables, wait for the build to finish, then check your database or try logging in. (Note: You may need to run the seed script manually via a one-off task if the build process doesn't run it, but you can add it to `amplify.yml` build phase if desired. Currently it is a manual script: `pnpm run seed:prod`).
    -   *Recommendation*: SSH into a box or run the seed script locally pointing to the remote DB if possible, OR add `pnpm run seed:prod` to the `postBuild` phase in `amplify.yml` if you want it auto-executed (careful with timeouts).
2.  **Storage**: Log in to the Admin Panel, upload an image to the Media collection, and verify it appears.
3.  **Email**: Trigger a "Forgot Password" flow to test email delivery.
