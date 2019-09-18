export const installed_blueprints = [
  {
    name: "SplashScreen",
    human_name: "Splash Screen"
  },
  {% if cookiecutter.has_email_auth_blueprint == "y" %}
  {
    name: "EmailAuth",
    human_name: "EmailAuth",
    access_route: "EmailAuth"
  },
  {% endif %}
  {% if cookiecutter.has_calendar_blueprint == "y" %}
  {
    name: "Google Maps",
    human_name: "Google Maps",
    access_route: "MapsScreen"
  },
  {% endif %}
  {% if cookiecutter.has_maps_blueprint == "y" %}
  {
    name: "Calendar",
    human_name: "Calendar",
    access_route: "Calendar"
  },
  {% endif %}
  {% if cookiecutter.has_tutorial_blueprint == "y" %}
  {
    name: "Tutorial",
    human_name: "Tutorial",
    access_route: "Tutorial"
  },
  {% endif %}
  {% if cookiecutter.has_messenger_blueprint == "y" %}
  {
  name: "MessengerChat",
  human_name: "MessengerChat",
  access_route: "Messenger"
  },
  {% endif %}
  // you can add more installed blueprints here
  // access route is the route nate given to navigator
];
