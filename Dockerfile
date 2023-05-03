FROM node:16.13.1

WORKDIR /usr/src/face-detection-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]