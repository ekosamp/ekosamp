export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/eko-sampoerna-meta-image.PNG',
  },
  index: {
    title: 'Eko Sampoerna | Interdisciplinary designer',
    description: 'Michele Mazzucco, interdisciplinary designer based in Brescia, Italy. I focus primarily on building user interfaces that are usable and scalable.'
  },
  profile: {
    title: 'Eko Sampoerna | graphic designer',
    description: 'Over the last 4+ years, I have been working with small- and medium-size companies all over the world.'
  },
  works: {
    title: 'Eko Sampoerna | Works',
    description: 'A selection of the work carried out over 4+ years of work. Among which: Websites, Web applications, coordinated images and more.'
  }
}
