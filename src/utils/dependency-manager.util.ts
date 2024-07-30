import Container from 'typedi';

export namespace DependencyManager {
  export function getContainer<T>(target: new (...args: any[]) => T) {
    return Container.get(target);
  }
}
