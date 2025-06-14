# Use the official Python image from the Docker Hub
FROM python:3.12-slim

# Set the working directory
#WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt
# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 8000

# Command to run the application
CMD ["python", "app.py"]