FROM node:bullseye

RUN apt update

RUN apt upgrade -y

# install pnpm
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

WORKDIR /app

COPY nextjs-dashboard nextjs-dashboard/

# RUN pnpm install i
