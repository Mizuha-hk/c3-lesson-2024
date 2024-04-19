# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="20"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] If your requirements rarely change, uncomment this section to add them to the image.
# COPY package.json ./
# RUN npm install

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
RUN sudo npm install -g pnpm
