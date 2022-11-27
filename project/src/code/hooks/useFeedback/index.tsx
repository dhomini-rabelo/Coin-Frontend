import { ReactNode, useState } from 'react'
import { ErrorModal } from './components/ErrorModal'
import { SuccessModal } from './components/SuccessModal'

export function useFeedback() {
  const [FeedbackElement, setFeedbackElement] = useState<string | ReactNode>('')

  const feedbackTypes = {
    success: SuccessModal,
    error: ErrorModal,
  }

  function renderFeedback(
    type: keyof typeof feedbackTypes,
    message: string,
    onClose: () => void = () => {
      setFeedbackElement('')
    },
  ) {
    const FeedComponent = feedbackTypes[type]
    setFeedbackElement(<FeedComponent message={message} onClose={onClose} />)
  }

  return {
    FeedbackElement,
    renderFeedback,
  }
}
