import React from "react"

interface IFormErrorProps {
  errorMessage: String
}

export const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => (
  <span className="text-medium text-red-500">{errorMessage}</span>
)