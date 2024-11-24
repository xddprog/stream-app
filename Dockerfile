FROM python:3.12.4


RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y
RUN pip install --upgrade pip
RUN pip install --root-user-action=ignore
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]