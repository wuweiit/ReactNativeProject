package com.awesomeproject2;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.vunun.recorder.AudioRecorderManagerPackage;
import com.imagepicker.ImagePickerPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;
import com.oblador.vectoricons.VectorIconsPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.imagepicker.ImagePickerPackage;
import  org.lovebing.reactnative.baidumap.BaiduMapPackage;
import com.rnfs.RNFSPackage;

import com.vunun.recorder.AudioRecorderManagerPackage;
import com.vunun.live.*;
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }


    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new AudioRecorderManagerPackage(),
              new VectorIconsPackage(), new ReactVideoPackage(),
             new ImagePickerPackage(),new RNFSPackage(),
              new BaiduMapPackage(getApplicationContext()),
              new RNLivePackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
