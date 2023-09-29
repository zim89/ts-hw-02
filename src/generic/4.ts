/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Info {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Info> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
