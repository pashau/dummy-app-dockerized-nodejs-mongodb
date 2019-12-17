FROM mhart/alpine-node:latest
# Copy local `package.json` file to `/tmp` on our image.
ADD src/package.json /tmp/package.json
# Install dependencies with `npm install` in `/tmp` dir.
#RUN cd /tmp && npm install --save core-js@^3 --verbose
RUN cd /tmp && npm install
# Create `opt/app` dir for all our project code.
# App will be running from this dir.
# Move the installed dependencies into this dir on the image.
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
# Change work directory to the /opt/app 
WORKDIR /opt/app
# Copy the contents of 'src/' (our project code from our local host) into the image app directory.
ADD src /opt/app/
# debug.. is package.json needed for more than npm install?
# ADD package.json /opt/app

# Expose the port 3000 where our app runs 
EXPOSE 3000
# Run the npm start command to start the Express server.
CMD ["npm", "start"]
