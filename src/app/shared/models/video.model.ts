export class Video {
  fileName: string;
  size: number;
  url: string;
  constructor(fileName, size, url) {
    this.fileName = fileName;
    this.size = size;
    this.url = url;
  }
}
