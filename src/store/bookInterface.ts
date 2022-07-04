
export interface IBooks {
    kind: string,
    totalItems: number,
    items: Array<IBook> | undefined
}

export interface IBook{
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: IvolumeInfo | undefined
    saleInfo: {
      country: string
      saleability: string
      isEbook: boolean
      listPrice: {
        amount: number
        currencyCode: string
      }
      retailPrice: {
        amount: number,
        currencyCode: string
      },
      buyLink: string
      offers: [
        {
          finskyOfferType: number,
          listPrice: {
            amountInMicros: 844610000,
            currencyCode: number
          },
          retailPrice: {
            amountInMicros: number,
            currencyCode: string
          }
        }
      ]
    },
    accessInfo: {
      country: string,
      viewability: string
      embeddable: boolean,
      publicDomain: boolean,
      textToSpeechPermission: string
      epub: {
        isAvailable: boolean,
        acsTokenLink: string
      },
      pdf: {
        isAvailable: boolean
      },
      webReaderLink: string
      accessViewStatus: string
      quoteSharingAllowed: boolean
    },
    searchInfo: {
      textSnippet: string
    }
}

interface IvolumeInfo {
    
    title: string | undefined
    authors: Array<string> | undefined
    publisher: string
    publishedDate: Date
    description: string
    industryIdentifiers: [
      {
        type: string
        identifier: string
      },
    ],
    readingModes: {
      text: boolean,
      image: boolean
    }
    pageCount: number,
      printType: number,
      categories: Array<string> | undefined
      averageRating: number
      ratingsCount: number
      maturityRating: string
      allowAnonLogging: boolean
      contentVersion: string,
      panelizationSummary: {
        containsEpubBubbles: boolean
        containsImageBubbles: boolean
      },
      imageLinks: {
        smallThumbnail: string | undefined
        thumbnail: string | undefined
        small: string | undefined
        medium: string | undefined
        large: string | undefined
        extraLarge: string | undefined
      }
      language: string
      previewLink: string
      infoLink: string
      canonicalVolumeLink: string
}