// lib
import { useForm, ValidationError } from '@formspree/react';

// components
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChat,
} from 'react-icons/hi';

type LabelPropsType = Form.Base & Form.FormLabel;
const FormLabel = ({
  id,
  icon,
  label,
  required,
}: LabelPropsType) => (
  <label
    className="space-y-2 my-2 md:flex md:justify-between md:items-center"
    htmlFor={id}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span className="">{label}</span>
    </div>
    {required && (
      <span className="c-badge c-badge--red">必須</span>
    )}
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
  formLabel,
  required,
  formInput,
  state,
}: Form.Item.Props) => (
  <div className="grid grid-cols-1">
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
      <h2 className="c-heading__main-section" id="contact">
        お問い合わせ
      </h2>
      <div className="bg-gray-light my-4">
        <form
          className="p-4 space-y-4 md:max-w-screen-sm md:mx-auto"
          onSubmit={handleSubmit}
        >
          <FormItem
            id="name"
            formLabel={{
              icon: <HiOutlineUser size="20" />,
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
              icon: <HiOutlineMail size="20" />,
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
              icon: <HiOutlineChat size="20" />,
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
            className="bg-theme-dark text-white px-4 py-2 block w-32 mx-auto rounded"
            disabled={state.submitting}
          >
            送信
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
