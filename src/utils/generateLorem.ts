export const generateLorem = (
  size: 'small' | 'medium' | 'large' | undefined,
): string => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
  Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
  Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
  Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
  Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
  Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque
  fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec,
  ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non
  sodales convallis, nisl arcu iaculis enim, ac efficitur erat turpis tristique quam.`;

  switch (size) {
    case 'small':
      return lorem.slice(0, lorem.length / 2);
    case 'medium':
      return lorem;
    case 'large':
      return String(lorem).repeat(3);
    default:
      return lorem;
  }
};
