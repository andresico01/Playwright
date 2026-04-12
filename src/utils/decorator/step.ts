import { test } from '@playwright/test';

export function boxedStep(target: Function, context: ClassMethodDecoratorContext) {

  return function replacementMethod(this: any, ...args: any[]) {
    
    const className = this.constructor ? this.constructor.name : 'UnknownClass';
    const methodName = context.name as string;
    const stepName = `${className}.${methodName}`;

    return test.step(stepName, async () => {
      return await target.call(this, ...args);
    }, { box: true });
  };
}