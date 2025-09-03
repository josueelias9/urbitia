# https://flask.palletsprojects.com/en/stable/tutorial/install/

FROM python:3 as base
WORKDIR /usr/src/app
COPY . .
WORKDIR flask-tutorial
RUN pip install -e .
RUN flask --app flaskr init-db


FROM base as dev
ENV JOSUE="en produccion"
CMD ["flask", "--app", "flaskr", "run", "--debug"]


FROM base as test
ENV JOSUE="en test"
RUN pip install pytest coverage
CMD [ "pytest" ]
