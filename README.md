# On-Premise connectivity in local CAP development setup

The repository contains a ready to deploy CAP Application having a test CAP service which can access itself via SAP Cloud Connector.
The *scripts* directory contains all commands required to utilize On-Premise connectivity in a local development setup.

Initial setup and deployment command sequence:
```
npm i
npm run build
npm run deploy
```

Prepare bindings, destinations and services:
```
bash scripts/1.bind.services.sh
bash scripts/2.create.destination.sh 
bash scripts/3.prepare.service.for.ssh.sh
```

Create connectivity proxy tunnel:
```
bash scripts/4.forwart.connectivity.proxy.port.sh
```

Start the local CAP service in a separate terminal:
```
bash scripts/5.start.CAP.service.with.bindings.sh 
```

Start the tests in a separate terminal:
```
bash scripts/6.use.destination.via.connectivity.sh
bash scripts/7.use.CDS.remote.destination.sh
```
