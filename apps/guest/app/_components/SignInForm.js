import { signInAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function SignInForm() {
  return (
    <form
      action={signInAction}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="mt-2" />
      <SubmitButton pendingLabel="Verifying...">Sign in</SubmitButton>
    </form>
  );
}

export default SignInForm;
