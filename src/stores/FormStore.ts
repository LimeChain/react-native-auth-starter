import {action, toJS, observable} from 'mobx';
import Validator, {Rules} from 'validatorjs';
import {any} from 'prop-types';
import en from 'validatorjs/src/lang/en';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

export type FormFieldChange = (
  e: NativeSyntheticEvent<TextInputChangeEventData>,
) => void;

interface FormField {
  value: string;
  error: string | boolean;
  rule: string;
}

interface FormMeta {
  isValid: boolean | void;
  error: string;
  submitError: string;
  isLoadingSubmit: boolean;
}

interface FormProp {
  fields: Record<string, FormField>;
  meta: FormMeta;
}

class FormStore {
  @observable
  form: FormProp;

  constructor() {
    // Hack for React Native - it's necessary to set a default language
    Validator.setMessages('en', en);

    this.form = {
      fields: {},
      meta: {
        isValid: false,
        error: '',
        submitError: '',
        isLoadingSubmit: false,
      },
    };
  }

  // TODO: Find better way to get the "name" prop of the component
  private getFieldNameFromEvent = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): string => {
    return e._targetInst.memoizedProps.name;
  };

  private validateField = (field: string) => {
    var validation = this.getValidator();
    this.form.meta.isValid = validation.passes();
    this.form.fields[field].error = validation.errors.first(field);
  };

  private getValidator = (): Validator.Validator<Record<string, FormField>> => {
    let validatorParams = this.getValidatorParams();
    return new Validator(
      validatorParams.fieldsData,
      validatorParams.fieldsRule,
    );
  };

  // Check if form is valid and display error for each form field iv it's necessary
  public isFormValid = (): boolean => {
    var validation = this.getValidator();
    this.form.meta.isValid = validation.passes();
    if (!this.form.meta.isValid) {
      for (const key in validation.errors.errors) {
        this.form.fields[key].error = validation.errors.first(key);
      }
      return false;
    }
    return true;
  };

  public getValidatorParams = (valueKey = 'value'): Record<string, any> => {
    let fieldsData: Record<string, string> = {};
    let fieldsRule: Rules = {};

    for (const key in this.form.fields) {
      const formField = this.form.fields[key];
      fieldsData[key] = formField.value;
      fieldsRule[key] = formField.rule;
    }

    return {
      fieldsData: fieldsData,
      fieldsRule: fieldsRule,
    };
  };

  public onBlur = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    this.validateField(this.getFieldNameFromEvent(e));
  };

  @action
  public onFieldChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    let field = this.getFieldNameFromEvent(e);
    let value = e.nativeEvent.text;

    this.form.fields[field].value = value;

    // Validate the field only in the following cases in order to remove/display the error message
    if (this.form.fields[field].error || !this.form.fields[field].value) {
      this.validateField(field);
    }
  };

  @action
  setError = (errMsg: string) => {
    this.form.meta.error = errMsg;
  };
}

export default FormStore;
