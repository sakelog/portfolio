import { useForm, ValidationError } from '@formspree/react';

import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChat,
} from 'react-icons/hi';

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
        className="space-y-3 max-w-screen-sm mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 items-baseline">
          <label
            className="flex items-center space-x-1 py-2 md:py-0"
            htmlFor="name"
          >
            <HiOutlineUser />
            名前
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="サンプル　花子"
            className="rounded md:col-span-2"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 items-baseline">
          <label
            className="flex items-center space-x-1 py-2 md:py-0"
            htmlFor="email"
          >
            <HiOutlineMail />
            メールアドレス
            <span className="bg-red-500 text-white text-sm p-1">
              必須
            </span>
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="sample@email.com"
            className="rounded md:col-span-2"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 items-baseline">
          <label
            className="flex items-center space-x-1 py-2 md:py-0"
            htmlFor="comment"
          >
            <HiOutlineChat />
            お問い合わせ内容
            <span className="bg-red-500 text-white text-sm p-1">
              必須
            </span>
          </label>
          <textarea
            name="comment"
            id="comment"
            className="rounded md:col-span-2"
            rows={5}
            required
          />
          <ValidationError
            prefix="Comment"
            field="comment"
            errors={state.errors}
          />
        </div>
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
