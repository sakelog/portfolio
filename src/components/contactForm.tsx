import { useForm, ValidationError } from '@formspree/react';

import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChat,
} from 'react-icons/hi';

type LabelPropsType = Form.Base & Form.FormLabel;
const FormLabel = ({
  id,
  required,
  icon,
  label,
}: LabelPropsType) => (
  <label
    className="grid grid-cols-9 gap-1 items-center"
    htmlFor={id}
  >
    <span className="col-span-full md:col-span-2">
      {required && (
        <span className="flex md:justify-center bg-red-100 border-2 border-red-500">
          <span className=" text-xs p-1">必須</span>
        </span>
      )}
    </span>
    {icon}
    <span className="col-span-8 md:col-span-6">
      {label}
    </span>
  </label>
);

type InputPropsType = Form.Base & Form.FormInput;
const FormInput = ({
  type,
  id,
  placeholder,
  required,
}: InputPropsType) =>
  type === 'textarea' ? (
    <textarea
      name={id}
      id={id}
      rows={5}
      placeholder={placeholder}
      className="rounded md:col-span-2"
      required={required}
    />
  ) : (
    <input
      name={id}
      id={id}
      type={type}
      placeholder={placeholder}
      className="rounded md:col-span-2"
      required={required}
    />
  );

const FormItem = ({
  id,
  required,
  formLabel,
  formInput,
  state,
}: Form.Item.Props) => (
  <div className="grid grid-cols-1 gap-1 md:grid-cols-3 items-baseline">
    <FormLabel
      id={id}
      icon={formLabel.icon}
      label={formLabel.label}
      required={required}
    />
    <FormInput
      id={id}
      type={formInput.type}
      placeholder={formInput.placeholder}
      required={required}
    />
    <ValidationError
      prefix={id}
      field={id}
      errors={state.errors}
    />
  </div>
);

const ContactForm = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
  );
  return state.succeeded ? (
    <div>
      <p>メッセージありがとうございました。</p>
      <p>確認の上、返信いたします。</p>
    </div>
  ) : (
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
        />
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
        />
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
        />
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
