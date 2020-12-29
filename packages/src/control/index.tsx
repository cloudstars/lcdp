import Radio from './InputCotrol/Radio';
import Input from './InputCotrol/Input';
import Select from './InputCotrol/Select';
import DatePicker from './InputCotrol/DatePicker';
import Container from './InputCotrol/Container';

class ComponetStore {
  list: any = {
    Radio,
    Input,
    Select,
    DatePicker,
    Container,
  };

  [Symbol.iterator]() {
    let index = 0;
    let arr = Object.entries(this.list);
    return {
      next() {
        if (index >= arr.length) {
          return {
            done: true,
            value: null,
          };
        } else {
          index++;
          return {
            done: false,
            value: arr[index - 1][1],
          };
        }
      },
    };
  }

  getComponent(field: string) {
    return this.list[field];
  }

  setComponent() {
    this.list = { ...this.list };
  }

  getComponentList() {
    return [...this];
  }
}

export default new ComponetStore();
