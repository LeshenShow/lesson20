import { Button } from "../Button/Button"
import { ModalRadix } from "../ModalRadix/ModalRadix"

export const DeletePostModal = ({ open, onClose }: Props) => {
  return (
    <ModalRadix open={open} onClose={onClose} modalTitle={"Delete Post"}>
      Are you sure you want to delete this post?
      <div>
        {/*Будем использовать обычные кнопки*/}
        <Button onClick={onClose} variant={"secondary"}>
          Yes
        </Button>
        <Button onClick={onClose}>No</Button>
      </div>
    </ModalRadix>
  )
}
type Props = {
  open: boolean
  onClose: () => void
}
