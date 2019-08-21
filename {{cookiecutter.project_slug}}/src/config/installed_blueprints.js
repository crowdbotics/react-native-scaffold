export const installed_blueprints = [
  {
    name: "SplashScreen",
    human_name: "Splash Screen"
  },
  {
    name: "EmailAuth",
    human_name: "EmailAuth",
    access_route: "EmailAuth",
    icon_name: 'envelope-o',
  },
  {% if cookiecutter.has_calendar_blueprint == "y" %}
  {
    name: "Google Maps",
    human_name: "Maps",
    access_route: "MapsScreen",
    icon_name: 'map',
  },
  {% endif %}
  {% if cookiecutter.has_maps_blueprint == "y" %}
  {
    name: "Calendar",
    human_name: "Calendar",
    access_route: "Calendar",
    icon_name: 'calendar'
  },
  {% endif %}
  {% if cookiecutter.has_tutorial_blueprint == "y" %}
  {
    name: "Tutorial",
    human_name: "Tutorial",
    access_route: "Tutorial",
    icon_name: 'question'
  },
  {% endif %}
  {% if cookiecutter.has_camera_blueprint == "y" %}
  {
  name: "Camera",
  human_name: "Camera",
  access_route: "UserCamera",
  icon_name: 'camera',
  },
  {% endif %}
  // you can add more installed blueprints here
  // access route is the route nate given to navigator
];
