+++
date = "2014-08-12T16:55:20+08:00"
title = "Android Development Environment"
authors = ["neil"]

+++

Set-up your android development environment

## Linux

**Supported Distributions**
1. Ubuntu (Precise Pangolin)
2. ElementaryOS (Luna)
3. Linux Mint (Cinnamon)


### Android Studio
First, add a new PPA in order for us to install Oracle's official SDK.
```bash
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install oracle-java7-installer
```

Second, download [Android Studio](http://developer.android.com/sdk/installing/studio.html).

Then, unpack the downloaded file and move it to your desired directory. In our case, we will put it in the ```/opt/``` directory.
```bash
sudo mv android-studio /opt/
```

Open your ```.bashrc``` and add the line below so we can run Android Studio from any directory:
```bash
nano ~/.bashrc #open .bashrc
```

```bash
# Android Studio
## Add this line at the end of .bashrc
export PATH="/opt/android-studio/bin:$PATH"
```

Save the changed file.

Restart your terminal.

You can now run Android Studio via this command:
```bash
studio.sh
```

Click the ```check for updates``` link from the window. Congratulations, you have finished installing Android Studio!

### Proxy Settings

If you are experiencing some connection issue and you are behind a proxy, do the following:

Open **Android Studio**.

Go to *Configure > Settings*.

Search for **Gradle**.

Enter the following as *Gradle VM Options*:
```bash
-Dhttp.proxyHost=proxy.domain.com -Dhttp.proxyPort=8080 -Dhttps.proxyHost=proxy.domain.com -Dhttps.proxyPort=8080
```

If the proxy needs authentication, just add this line:
```bash
-Dhttp.proxyUser=<username> -Dhttp.proxyPassword=<password>
```

Note: Change the proxy host, port, user, and password according to your own proxy settings.

Apply and save the changes.

Next, Go to *Configure > Plugins*.

Click *Browse Repositories*.

In the new window, click *Http Proxy Settings* and configure it.

Finally, you should be able to update your **Android Studio**.

### Genymotion

Install **Oracle's Virtualbox**.
```bash
sudo apt-get install virtualbox-qt
```

Next, go to [Genymotion](http://www.genymotion.com) website.

Then, sign up for an account.

After that, download Genymotion [here](https://cloud.genymotion.com/page/launchpad/download/).

Move the downloaded file to ```/opt/```.
```bash
cd ~/Downloads/
sudo mv genymotion-2.2.2_x64.bin /opt/ #version may vary from time to time
```

Go to ```/opt/```.
```bash
cd /opt/
```

Make the file executable.
```
sudo chmod +x genymotion-2.2.2_x64.bin
```

Execute the installer.
```
sudo ./genymotion-2.2.2_x64.bin
```

At the same page, install the Genymotion plug-in into our Android Studio. Check the **Download IntelliJ IDEA Plugin** section.
