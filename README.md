# Slackify

Slackify is a CLI tool for interacting with the Slack API.

## Development

Use npm to install the necessary packages to run Slackify in a development environment.

```bash
npm install 
```

Run Slackify in a development environment.
```bash 
npm run start:dev
```

## Packaging

Package Slackify as a binary. 

```bash
npm run build 
```

This will result in three binaries: `slackify-linux`, `slackify-macos`, and `slackify-win.exe`. These binaries can be 
used to run Slackify on their associated platforms. 

## Events

Slackify also runs an Express web server that accepts events from the Slack Events API. 

The web server is currently hosted as `localhost:80`, recommended to use ngrok to route requests 
to localhost so that Slack can send events to the server. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)