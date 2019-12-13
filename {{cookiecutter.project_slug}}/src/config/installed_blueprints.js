export const installed_blueprints = [


  {% if cookiecutter.has_tutorial_blueprint == "y" %}
  {
    name: "Tutorial",
    human_name: "Tutorial",
    access_route: "Tutorial",
    icon_name: 'question-circle',
  },
  {% endif %}
  


  //@BlueprintInsertion

  // you can add more installed blueprints here
  // access route is the route nate given to navigator
];
