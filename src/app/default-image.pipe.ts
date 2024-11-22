import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, defaultImagePath: string = 'assets/images/default-image.jpeg'): string {
    // Check if the input is empty or contains only spaces
    if (!value || value.trim() === '') {
      return defaultImagePath;
    }
    return value;
  }

}
