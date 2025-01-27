import { faker } from '@faker-js/faker';
import Image from 'next/image';

export default function KeyVisual() {

    const photos = [
        {
            url: faker.image.urlPicsumPhotos({ width: 128, height: 128 }),
            alt: faker.word.adjective(100)
        },
        {
            url: faker.image.urlPicsumPhotos({ width: 128, height: 128 }),
            alt: faker.word.adjective(100)
        },
        {
            url: faker.image.urlPicsumPhotos({ width: 128, height: 128 }),
            alt: faker.word.adjective(100)
        },
    ]
    return (
        <section>
            {
                photos.map(photo => {
                    return (
                        <div>
                            <Image
                                src={photo.url}
                                width={300}
                                height={200}
                                alt={photo.alt}
                            />
                        </div>
                    )
                })
            }
            
        </section>
    )
}