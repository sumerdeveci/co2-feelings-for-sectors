export const handleError = (error: any): void => {
  console.error('Error:', error);
  alert(`Something wrong happened: ${error?.toString() || 'Cannot transform error to a readable form'}`)
}