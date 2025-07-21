// Build JSON recursively
export function buildJson(fields: any[]): Record<string, any> {
  const result: Record<string, any> = {};
  for (const field of fields) {
    if (!field.key || !field.type) continue;
    switch (field.type) {
      case "string":
        result[field.key] = "string";
        break;
      case "number":
        result[field.key] = "number";
        break;
      case "boolean":
        result[field.key] = false;
        break;
      case "float":
        result[field.key] = 0.0;
        break;
      case "objectId":
        result[field.key] = 'ObjectId("...")';
        break;
      case "nested":
        result[field.key] = buildJson(field.children || []);
        break;
      default:
        result[field.key] = null;
    }
  }
  return result;
}
