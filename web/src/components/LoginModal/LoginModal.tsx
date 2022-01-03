import { useAuth } from '@redwoodjs/auth'
import { EmailField, FieldError, Form, Label, Submit } from '@redwoodjs/forms'
import { RPCError, RPCErrorCode } from 'magic-sdk'

const LoginModal = () => {
  const { loading, logIn, error } = useAuth()

  const onSubmit = async (data: { email: string }) => {
    logIn(data)
      .then()
      .catch((error) => {
        console.error(error)

        if (error instanceof RPCError) {
          switch (error.code) {
            case RPCErrorCode.MagicLinkFailedVerification:
            case RPCErrorCode.MagicLinkExpired:
            case RPCErrorCode.MagicLinkRateLimited:
            case RPCErrorCode.UserAlreadyLoggedIn:
              // TODO logging
              break
          }
        }
      })
  }

  return (
    <>
      <input
        defaultChecked={true}
        type="checkbox"
        id="login-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box md:max-w-sm">
          <Form onSubmit={onSubmit}>
            <div className="form-control">
              <Label name="email" className="label text-sm">
                Hassle-free with our secure passwordless login
              </Label>
              <EmailField
                name="email"
                disabled={loading}
                className="input input-bordered"
                placeholder="your@email.com"
                errorClassName="input input-bordered input-error"
                validation={{
                  required: true,
                  pattern: {
                    value: /[^@]+@[^\.]+\..+/,
                    message: error?.message,
                  },
                }}
              />
              <FieldError
                name="email"
                className="mt-1 label-text-alt text-error"
              />
            </div>
            <div className="mt-6 modal-action">
              <Submit
                disabled={loading}
                className={`btn btn-neutral ${loading ? 'loading' : ''}`}
              >
                Sign in
              </Submit>
              <label htmlFor="login-modal" className="btn btn-ghost">
                Close
              </label>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default LoginModal
