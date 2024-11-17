# nestjs-demo-2
## Overview
- This is basically the revised version of the `nestjs-demo` project:
  - https://github.com/RockkLee/nestjs-demo

## APIs
```bash
# get
curl --location '127.0.0.1:3000/user/<id>'

# post
curl --location '127.0.0.1:3000/user/create' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "aaa",
  "email": "aaa@aaa.com"
}'

# update
curl --location --request PUT '127.0.0.1:3000/user/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "<id>",
	"name": "aaa2",
    "email": "aaa@aaa.com"
}'

# delete
curl --location --request DELETE '127.0.0.1:3000/user/<id>'
```

## Scripts (in `./package.json`)
- `npm run _clean`: clean the compiled JS files and tsconfig tsconfig.build.tsbuildinfo (The cache for tsconfig)
  - `"_clean": "rimraf infra/tsconfig.build.tsbuildinfo app/tsconfig.build.tsbuildinfo domain/tsconfig.build.tsbuildinfo && tsc -b --clean infra && tsc -b --clean app && tsc -b --clean"`
  - If you clean the project without deleting the tsconfig.build.tsbuildinfo (cache), it won't rebuild the project because it thinks nothing has chnaged.
- `npm run _build`: build all modules which are Infra, App, and Domain.
  - `"_build": "npm run build --workspace=domain && npm run build --workspace=app && npm run build --workspace=infra"`
  - For some reason, the app module won't build sucessfully with the above command, but it works if `npm run _clean` was executed first.
    - This might be caused by a conflict between the infra module (a NestJS module) and the app module (a NestJS module).  
- `npm run _start`: Run the compiled JS file, which is `infra/dist/main.js`, using `nest start`
  - `"_start": "npm run start --workspace=infra",`
- `npm run _debug:ts-node`: Directly run the TS file, which is `infra/src/main.ts`, using `ts-node`
  - `"_debug:ts-node": "ts-node -r tsconfig-paths/register -P infra/tsconfig.dev.json infra/src/main.ts"`
  - For some reason, it still sometimes needs to be built before running, even though it runs the ts code directly.

## TODO LIST
- Figure out the root causes of the issues in the scripts above.
- Add an error handling filter
- Add the swagger documentation
- Add some unit-tests
# nestjs-demo-3
