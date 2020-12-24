import RadioField from './Radio';
import InputField from './Input';
import SelectField from './Select';
import DatePickerField from './DatePicker';
import { FieldComponent } from '../../type';

type ComponentMap = {
  [key: string]: FieldComponent;
};

// const list: ComponentMap = {
//   InputField,
// };

class ComponetStore {
  list: ComponentMap = {
    RadioField,
    InputField,
    SelectField,
    DatePickerField,
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

  getComponent(type: string) {
    return this.list[type];
  }

  setComponent() {
    this.list = { ...this.list, TextField: InputField };
  }

  getComponentList() {
    return [...this];
  }
}

export default new ComponetStore();
