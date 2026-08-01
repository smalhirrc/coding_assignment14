# React & TypeScript Production Site

## Description
This project is a React and TypeScript application containerized for production using a highly optimized, two-stage Docker build. 

* **Stage 1 (Build)**: Uses Node.js to install all dependencies (including developer tools like ESLint, Prettier, and Husky), compile the TypeScript source code, and generate production-ready static assets.
* **Stage 2 (Production)**: Completely discards the heavy Node.js environment and developer tools. It copies only the compiled static assets into a lightweight, high-performance Nginx web server. This ensures the final container is fast, secure, and minimal in size.

---

## Project Requirements
* [Docker Desktop](https://docker.com) installed and running.
* Node.js (v20+ recommended for local development).

---

## Local Development Setup
To run and install dependencies locally on your machine without Docker:

1. Install project dependencies:
   ```bash
   npm install
   ```
   *Note: If you encounter peer dependency conflicts, use the legacy flag:*
   ```bash
   npm install --legacy-peer-deps
   ```

2. Start the local development server:
   ```bash
   npm run start
   ```

---

## Docker Production Deployment

Follow these steps to build and run the production-optimized version of the application.

### 1. Build the Docker Image
This command reads the `Dockerfile`, triggers the multi-stage build, and tags the final lightweight Nginx image as `toolkit`.

```bash
docker build -t toolkit .
```

### 2. Run the Docker Container
This command launches the web server and maps the container's internal port `80` (where Nginx hosts the site) to port `5575` on your Mac/PC.

```bash
docker run -d --name Malhi_Sukhpreet_coding_assignment14 -p 5575:80 toolkit
```
*(Note: The `-d` flag runs the container in "detached" background mode, keeping your terminal free).*

### 3. Access the Application
Once the container is running, open your web browser and navigate to: http://localhost:5575

---

## Managing the Container

Use these commands to manage your running production container:

* **View Logs**: See the live traffic and server logs.
  ```bash
  docker logs -f Malhi_Sukhpreet_coding_assignment14
  ```
* **Stop the Container**: Pause the running site.
  ```bash
  docker stop Malhi_Sukhpreet_coding_assignment14
  ```
* **Start the Container**: Turn the site back online.
  ```bash
  docker start Malhi_Sukhpreet_coding_assignment14
  ```
* **Remove the Container**: Delete the container instance (required if you want to rebuild or change ports).
  ```bash
  docker rm -f Malhi_Sukhpreet_coding_assignment14
  ```

### Run the Container (Port 8083 - README Rubric Requirement)
To map container internal port to 8083 on localhost, clear the previous container and map it using this command:
```bash
docker rm -f malhi_sukhpreet_coding_assignment14
docker run -d -p 8083:80 --name malhi_sukhpreet_coding_assignment14 toolkit
```
View the running site at: http://localhost:8083
