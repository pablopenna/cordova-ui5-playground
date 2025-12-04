# cordova-ui5-playground
Cordova project to run sample/test UI5 code in actual devices

## Usage

```sh
# Install dependencies
npm install

# Initialize Cordova for Android
cd ui5_playground && npx cordova platform add android && cd -

# Prepare UI5 code and place result in the Cordova folder
npm run build
```

If everything went alright you should see the path to the generated APK in the console output.

You can install it in an Android device via `adb`:

```sh
adb install <path_to_apk>
```

## Change UI5 version

Replace the existing version with the one desired in the `ui5.yaml` and `webapp/manifest.json` files.