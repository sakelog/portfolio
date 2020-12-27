export function searchComponentBySlug(Components, slug: string) {
  let targetComponent;

  Components.map((component) => {
    if (component.slug == slug) {
      targetComponent = component;
    }
  });

  return targetComponent;
}
