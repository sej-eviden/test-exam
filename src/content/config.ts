import { z, defineCollection } from 'astro:content'

const examCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        body: z.array(z.string()),
        options: z.array(z.string()),
        answer: z.string()
    })
})

export const collections = {
    'Microsoft_AZ-104': examCollection,
    'Microsoft_AZ-700': examCollection,
    'Amazon_AWS_Certified_SysOps_Administrator': examCollection,
    'Google_Professional_Cloud_Associate_Cloud_Engineer': examCollection,
}