export function logMethod() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("Calling function: " + propertyKey);
    };
}