declare namespace Form {
  declare type FormLabel = {
    icon: ReactElement;
    label: string;
  }
  declare type FormInput = {
    type: 'text' | 'email' | 'textarea';
    placeholder?: string;
  }

  declare type Base = {
    id: Id;
    required?: boolean;
  }
  declare namespace Item  {
    declare type Props = 
    Base &
     {
      state: {
        submitting: boolean;
        succeeded: boolean;
        errors: any[];
      };
      formLabel: FormLabel;
      formInput: FormInput;
    }
  }
}
