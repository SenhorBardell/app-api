# Simple nodejs api

Try accessing to http://app-api.eu01.aws.af.cm

## Using bearer, passportjs, mongoose, winston

```
git clone https://github.com/SenhorBardell/app-api
```

```
cd app-api
```

```
npm install
```

```
node server.js
```

#Httpie example

```
http POST http://localhost:1337/oauth/token grant_type=password client_id=mobile client_secret=1366613 username=John password=test111
```

```
http POST http://localhost:1337/oauth/token grant_type=refresh_token client_id=mobile client_secret=1366613 refresh_token=TOKEN
```
```
http http://app-api.eu01.aws.af.cm/api Authorization:'Bearer TOKEN'
```
```
http http://app-api.eu01.aws.af.cm/articles Authorization:'Bearer TOKEN'
```