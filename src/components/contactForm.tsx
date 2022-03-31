import { useForm, ValidationError } from '@formspree/react';

import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChat,
} from 'react-icons/hi';

const FormItem = (props: Form.Item.Props) => {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 items-baseline">
      <FormLabel
        id={props.id}
        icon={props.formLabel.icon}
        label={props.formLabel.label}
        required={props.required}
      />
      <FormInput
        id={props.id}
        type={props.formInput.type}
        placeholder={props.formInput.placeholder}
        required={props.required}
      />
      <ValidationError
        prefix={props.id}
        field={props.id}
        errors={props.state.errors}
      />
    </div>
  );
};

type LabelPropsType = Form.Base & Form.FormLabel;
const FormLabel = (props: LabelPropsType) => {
  return (
    <label
      className="grid grid-cols-9 gap-1 items-center"
      htmlFor={props.id}
    >
      <span className="col-span-full md:col-span-2">
        {props.required && (
          <span className="flex md:justify-center bg-red-100 border-2 border-red-500">
            <span className=" text-xs p-1">必須</span>
          </span>
        )}
      </span>
      {props.icon}
      <span className="col-span-8 md:col-span-6">
        {props.label}
      </span>
    </label>
  );
};

type InputPropsType = Form.Base & Form.FormInput;
const FormInput = (props: InputPropsType) => {
  return props.type == 'textarea' ? (
    <textarea
      name={props.id}
      id={props.id}
      rows={5}
      placeholder={props.placeholder}
      className="rounded md:col-span-2"
      required={props.required}
    />
  ) : (
    <input
      name={props.id}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      className="rounded md:col-span-2"
      required={props.required}
    />
  );
};

const ContactForm = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
  );
  if (state.succeeded) {
    return (
      <div>
        <p>メッセージありがとうございました。</p>
        <p>確認の上、返信いたします。</p>
      </div>
    );
  }
  return (
    <section>
      <form
        className="space-y-6 bg-gray-100 rounded p-2 max-w-screen-sm mx-auto"
        onSubmit={handleSubmit}
      >
        <FormItem
          id="name"
          formLabel={{
            icon: <HiOutlineUser />,
            label: '名前',
          }}
          formInput={{
            type: 'text',
            placeholder: 'サンプル　花子',
          }}
          state={state}
        ></FormItem>
        <FormItem
          id="email"
          formLabel={{
            icon: <HiOutlineMail />,
            label: 'メールアドレス',
          }}
          formInput={{
            type: 'email',
            placeholder: 'sample@email.com',
          }}
          required
          state={state}
        ></FormItem>
        <FormItem
          id="comment"
          formLabel={{
            icon: <HiOutlineChat />,
            label: 'お問い合わせ内容',
          }}
          formInput={{
            type: 'textarea',
          }}
          required
          state={state}
        ></FormItem>
        <button
          type="submit"
          className="bg-theme text-white px-4 py-2 block w-32 mx-auto rounded"
          disabled={state.submitting}
        >
          送信
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
