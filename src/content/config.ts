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
    'Amazon_AWS_Certified_Cloud_Practitioner': examCollection,
    'Amazon_AWS_Certified_Developer': examCollection,
    'Amazon_AWS_Certified_Security': examCollection,
    'Amazon_AWS_Certified_Solutions_Architect': examCollection,
    'Amazon_AWS_Certified_SysOps_Administrator': examCollection,
    'Google_Professional_Cloud_Architect': examCollection,
    'Google_Professional_Cloud_Associate_Cloud_Engineer': examCollection,
    'Google_Professional_Cloud_Database_Engineer': examCollection,
    'Google_Professional_Cloud_DevOps_Engineer': examCollection,
    'Google_Professional_Cloud_Security_Engineer': examCollection,
    'Microsoft_AZ-104': examCollection,
    'Microsoft_AZ-204': examCollection,
    'Microsoft_AZ-305': examCollection,
    'Microsoft_AZ-400': examCollection,
    'Microsoft_AZ-700': examCollection,
    'Microsoft_AZ-720': examCollection,
    'Microsoft_AZ-900': examCollection,
    'Microsoft_DP-203': examCollection,
    'Microsoft_DP-300': examCollection,
    'Microsoft_DP-900': examCollection,
    'Microsoft_MS-720': examCollection,
    'Microsoft_PL-300': examCollection,
    'Microsoft_SC-100': examCollection,
    'Microsoft_SC-200': examCollection,
    'Microsoft_SC-300': examCollection,
    'Microsoft_SC-400': examCollection,
    "Microsoft_AI-102": examCollection,
    "HashiCorp_Terraform_Associate": examCollection,
}