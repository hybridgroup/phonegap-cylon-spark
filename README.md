Phonegap Cylon Spark
=====================

An app to control spark with cylon

![Cylonjs Phonegap Spark](https://raw.githubusercontent.com/hybridgroup/phonegap-cylon-spark/master/screenshot.png)

## Building

### Getting ready to build.

Here there are the basic steps to install and run the application.

1. Make sure you have installed [Node.js](http://nodejs.org/):

```bash
$ node -v
v0.x.x
```

If not installed try using home brew `brew install node`, or directly from the [package file](http://nodejs.org/dist/v0.10.31/node-v0.10.31.pkg).

2. Clone repo and get into it:

```bash
$ git clone git@github.com:hybridgroup/phonegap-cylon-spark.git
$ cd phonegap-cylon-spark
```

3. Then install the application dependencies

```bash
$ npm install
```

4. Modify values to connect to your spark device in `spark.js` file:

```javascript
    accessToken: 'ACCESS_TOKEN',
    deviceId: 'DEVICE_ID'
```

5. Generate spark_brower.js file with this command:

```make bundle```

Now, you are ready to start playing.

### Building, emulating and running.

There are multiple ways you can start playing with it. You can either run the web server, emulate the
application using any emulator you prefer, run it as a native app directly on your mobile device or use the
[PhoneGap Developer App](http://app.phonegap.com/). Either way you prefer, you first need to set up the devices
properly.

Here we will explain how to make it run, emulate and run the web service.

#### Emulate/Run

For this purpose you need to define the platforms you will be working on with the app, then set and
configure the emulator properly, according to the [PhoneGap Platform Guides](http://docs.phonegap.com/en/edge/guide_platforms_index.md.html).

First you need tell the app which platforms you will be using, so you need to run:

```bash
$ cordova platform add android
$ cordova platform add ios
```

NOTE: If you aren't on Mac, avoid adding the iOS platform.

In case you need to add more platforms, you need to run the platform method including your new platforms
as follows:

```bash
$ cordova platform add wp8
```

In the case of Android you need to install the [Android SDK](http://developer.android.com/sdk/index.html) and configure
the emulator beforehand. You might need to configure the [Android Emulator](http://developer.android.com/tools/devices/emulator.html).
Then, in order to make works the Cordova CLI you need to add this to your '~.bash_profile`:

```bash
export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools
```

The address used on this case is the address you have your android SDK properly installed.

Next you need to update the android project to add the location.properties file contaning the sdk location:

```bash
$ android update project --subprojects -p platforms/android/
```

NOTE: For more detailed instructions follow the [PhoneGap Android Platform Guide](http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide).

Once you have finished setting your Android SDK configuration, you're ready to emulate the android app. Execute this in
order to build and emulate your app trough the CLI:

With Cordova
```bash
$ cordova build android
$ cordova emulate android
```

With PhoneGap
```bash
$ phonegap build android
$ phonegap emulate android
```

For running your app directly on your device, you need to replace the command `emulate` with `run`. Example:

$ cordova run android
```

```bash
$ phonegap run android
```

## Running

To run project in iOS emulator:
```bash
$ cordova emulate ios
```

To run project in android device (You can use [Genymotion](http://www.genymotion.com/) too):

```bash
$ cordova run android
```
