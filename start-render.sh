#!/bin/bash
# Start both frontend and backend for Render

cd /home/rb2026/.openclaw/workspace/alevel-study-app

# Start backend in background
cd backend
python3 main.py &
BACKEND_PID=$!
cd ..

# Start frontend on Render's PORT
python3 -m http.server $PORT

# If frontend stops, kill backend
trap "kill $BACKEND_PID" EXIT
