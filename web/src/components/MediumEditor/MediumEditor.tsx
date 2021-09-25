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
import Dropdown from '../Dropdown/Dropdown'

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
            <Dropdown
              labelClass="btn-xs btn-ghost"
              menuClass="p-1 horizontal w-min rounded-md"
              dropdownClass="dropdown-hover dropdown-left dropdown-end"
              label={<FaShareAlt size="18" className="drop-shadow-lg" />}
            >
              <button className="btn btn-xs btn-ghost">
                <FaTwitter size="18" className="drop-shadow-lg" />
              </button>
              <button className="btn btn-xs btn-ghost">
                <FaFacebook size="18" className="drop-shadow-lg" />
              </button>
              <button className="btn btn-xs btn-ghost">
                <FaLinkedin size="18" className="drop-shadow-lg" />
              </button>
              <button className="btn btn-xs btn-ghost">
                <FaLink size="18" className="drop-shadow-lg" />
              </button>
            </Dropdown>
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
