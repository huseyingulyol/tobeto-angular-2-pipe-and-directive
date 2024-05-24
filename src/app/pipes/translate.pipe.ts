import { Pipe, type PipeTransform } from '@angular/core';
@Pipe({
  name: 'appTranslate',
  standalone: true,
})

export class TranslatePipe implements PipeTransform {
  private dictionary = [
    ["username", "kullanıcı adı", "имя пользователя"],
    ["password", "parola", "пароль"],
    ["register", "kayıt", "регистр"],
    ["submit", "gönder", "отправить"],
    ["welcome", "hoşgeldin", ""],
    ["hello", "merhaba", ""],
  ];

  transform(value: string, fromLanguage: string, toLanguage: string): string {
    let fromIndex, toIndex;
    switch (fromLanguage.toLowerCase()) {
      case 'en':
        fromIndex = 0;
        break;
      case 'tr':
        fromIndex = 1;
        break;
      case 'ru':
        fromIndex = 2;
        break;
      default:
        return "Source language not supported";
    }

    switch (toLanguage.toLowerCase()) {
      case 'en':
        toIndex = 0;
        break;
      case 'tr':
        toIndex = 1;
        break;
      case 'ru':
        toIndex = 2;
        break;
      default:
        return "Target language not supported";
    }

    let translatedSentence = value;

    this.dictionary.forEach(term => {
      const wordToTranslate = term[fromIndex].toLowerCase();
      const translatedWord = term[toIndex] || "Translation not available";

      const regex = new RegExp(`\\b${wordToTranslate}\\b`, 'gi');
      translatedSentence = translatedSentence.replace(regex, translatedWord);
    });

    return translatedSentence;
  }

}
