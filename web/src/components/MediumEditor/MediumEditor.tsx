import PureMediumEditor from 'medium-editor'
import { FC, HTMLAttributes, MouseEvent, useEffect, useRef } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import {
  FaClone,
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaShareAlt,
  FaTwitter,
} from 'react-icons/fa'
import { GiSaveArrow } from 'react-icons/gi'

interface MediumEditorProps extends HTMLAttributes<HTMLDivElement> {
  content?: string
  disabled?: boolean
  editable?: boolean
  onSave?: (serialized: string) => void
  toolbarOptions?: PureMediumEditor.ToolbarOptions
}

const MediumEditor: FC<MediumEditorProps> = ({
  onSave,
  content,
  className,
  children,
  toolbarOptions,
  disabled = false,
  ...rest
}) => {
  const ref = useRef<PureMediumEditor.MediumEditor>()

  const handleSave = (e: MouseEvent<HTMLButtonElement>) => {
    // TODO
    e.stopPropagation()

    const serialized: Record<
      string,
      Record<string, string>
    > = ref.current.serialize()

    if (serialized) {
      onSave?.(Object.values(serialized)?.[0]?.['value'])
    }
  }

  // A workaround of click and focus behavior not working on Safari
  // https://gist.github.com/cvrebert/68659d0333a578d75372
  const handleClickFocus = (e: MouseEvent<HTMLButtonElement>) => {
    // Set button focus onClick since button can NOT be focused by clicking (even with tabindex)
    e.currentTarget.focus()
  }

  useEffect(
    () => {
      ref.current = new PureMediumEditor('.medium-editor-wrapper', {
        disableEditing: disabled,
        anchor: {
          placeholderText: 'Paste link',
        },
        placeholder: {
          text: disabled ? '' : 'Start writing...',
        },
        toolbar: disabled
          ? false
          : {
              buttons: [
                'bold',
                'italic',
                'underline',
                'unorderedlist',
                'orderedlist',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'quote',
                'anchor',
              ],
              ...toolbarOptions,
            },
      })

      if (content) {
        ref.current.setContent(content)
      }

      return () => {
        ref.current.destroy()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div>
      <div className="flex py-4 flex-col-reverse gap-1 sm:gap-0 sm:flex-row sm:items-center">
        {/* TODO */}
        <div className="flex items-center text-sm">
          <div className="avatar online mr-2">
            <div className="rounded-btn w-7 h-7">
              <img alt="Avatar" loading="lazy" src="images/icon-96x96.png" />
            </div>
          </div>
          <div className="text-info mr-2 font-semibold">Jeremy House</div>
          <div className="text-gray-600 ">
            {new Date().toLocaleDateString()}
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          {disabled ? (
            <div className="dropdown dropdown-hover dropdown-left dropdown-end">
              <button
                tabIndex={0}
                onClick={handleClickFocus}
                className="btn btn-xs btn-ghost"
              >
                <FaShareAlt size="18" className="drop-shadow-lg" />
              </button>
              <ul
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                className="p-1 shadow menu dropdown-content rounded-md horizontal w-min"
              >
                <li>
                  <button className="btn btn-xs btn-ghost">
                    <FaTwitter size="18" className="drop-shadow-lg" />
                  </button>
                </li>
                <li>
                  <button className="btn btn-xs btn-ghost">
                    <FaFacebook size="18" className="drop-shadow-lg" />
                  </button>
                </li>
                <li>
                  <button className="btn btn-xs btn-ghost">
                    <FaLinkedin size="18" className="drop-shadow-lg" />
                  </button>
                </li>
                <li>
                  <button className="btn btn-xs btn-ghost">
                    <FaLink size="18" className="drop-shadow-lg" />
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <button className="btn btn-xs btn-ghost" onClick={handleSave}>
                <GiSaveArrow size="18" className="drop-shadow-lg" />
              </button>
              <button className="btn btn-xs btn-ghost">
                <FaClone size="18" className="drop-shadow-lg" />
              </button>
              <button className="btn btn-xs btn-ghost">
                <AiFillDelete size="18" className="drop-shadow-lg" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`medium-editor-wrapper outline-none prose max-w-full ${className}`}
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}

export default MediumEditor
