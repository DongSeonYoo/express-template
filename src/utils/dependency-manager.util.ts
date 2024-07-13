import Container from 'typedi';

export namespace DependencyManager {
  export function getContainer(target: new (...args: any[]) => any) {
    return Container.get(target);
  }
}
