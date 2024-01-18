import domtoimage from 'dom-to-image';

export const saveImage = async (ref) => {
  try {
    const dataUrl = await domtoimage.toPng(ref);
    const link = document.createElement('a');
    link.download = 'my-meme.png';
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Could not save the image!', error);
  }
};