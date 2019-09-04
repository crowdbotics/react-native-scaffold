package com.{{cookiecutter.project_slug}};

import android.app.Application;

import com.facebook.react.ReactApplication;
{% if cookiecutter.has_calendar_blueprint == "y" %}import co.apptailor.googlesignin.RNGoogleSigninPackage;{% endif %}
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

{% if cookiecutter.has_maps_blueprint == "y" %}import com.airbnb.android.react.maps.MapsPackage;{% endif %}

import java.util.Arrays;
import java.util.List;

{% if cookiecutter.has_camera_blueprint == "y" %}import org.reactnative.camera.RNCameraPackage;{% endif %}

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            {% if cookiecutter.has_calendar_blueprint == "y" %}new RNGoogleSigninPackage(),{% endif %}
            {% if cookiecutter.has_camera_blueprint == "y" %}new RNCameraPackage(),{% endif %}
            new RNGestureHandlerPackage(),
            {% if cookiecutter.has_maps_blueprint == "y" %}new MapsPackage(){% endif %}

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
