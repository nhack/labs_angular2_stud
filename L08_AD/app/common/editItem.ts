export class EditItem<T> {
  editing: boolean
  constructor (public item: T) {
    this.editing = false;
  }
}
