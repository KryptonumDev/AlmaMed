export function removeMarkdownTags(inputString: string) {
  return inputString
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#{1,6}\s/g, '')
    .replace(/\[([^\]]+)\]\((.*?)\)/g, '$1')
    .replace(/\!\[([^\]]+)\]\((.*?)\)/g, '');
}
