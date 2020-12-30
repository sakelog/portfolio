export function searchComponentBySlug(components: any[], slug: string) {
  let targetComponent;

  components.map((component) => {
    if (component.slug == slug) {
      targetComponent = component;
    }
  });

  return targetComponent;
}
