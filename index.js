const spawn = require('child_process').spawn;

const check = function(){
    return new Promise((resolve, reject)=> {
        const docker = spawn('docker', ['ps']);

        docker.stdout.on('data', (data) => {
            console.log(`docker data: ${data}`);
            resolve(data);
          });
          
          docker.stderr.on('data', (data) => {
            console.log(`docker stderr: ${data}`);
            reject(data);
          });
          
          docker.on('close', (code) => {
            if (code !== 0) {
              console.log(`docker process exited with code ${code}`);
            }
          });        
    });
}

check().then(
    (data) => {
        console.log('Docker daemon is running');
    },
    (error) => {
        console.log(`error: ${error}`);
    }
);

