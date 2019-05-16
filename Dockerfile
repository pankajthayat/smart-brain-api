FROM node:jessie

#creates working dir
WORKDIR /usr/src/smart-brain-api  

# copying all the files    
COPY ./ ./

# now run npm install we can run multiple command as well
RUN npm install


# diff btw run and command
CMD [ "/bin/bash" ]