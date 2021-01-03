# Simple-ReactNative-UI
If you're unable to load your app on your phone due to a network timeout or a refused connection,
a good first step is to verify that your phone and computer are on the same network and that they can reach each other. 
Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing exp:// with http://.
So, for example, if underneath the QR code in your terminal you see:
exp://192.168.0.1:19000
