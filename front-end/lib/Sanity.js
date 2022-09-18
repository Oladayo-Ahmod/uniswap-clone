import sanityClient from '@sanity/client'

/**
 * @param  {'4o2k16lj'} {projectId
 * @param  {'production'} dataset
 * @param  {'v1'} apiVersion
 * @param  {false} useCdn
 * @param  {'skUxaowJRkqRYd6358raY1QtXTifQINvBMCNwrxDKQCZ4MSDiCdklKv3JkjIsTwjlGVfYNeKBLv1xTypGazq2zrPszqnoEMTyJIH38lMteCORwh8zLMHlm9uP4U40BaDOSlyQq5uGbXS3nbnqvDBh5OqXyKshhhe6X6PLr0mA1TfbDGtnR7f'}} token
 */
export const Client = sanityClient({
    projectId : '4o2k16lj',
    dataset : 'production',
    apiVersion : 'v1',
    useCdn : false,
    token : 'skUxaowJRkqRYd6358raY1QtXTifQINvBMCNwrxDKQCZ4MSDiCdklKv3JkjIsTwjlGVfYNeKBLv1xTypGazq2zrPszqnoEMTyJIH38lMteCORwh8zLMHlm9uP4U40BaDOSlyQq5uGbXS3nbnqvDBh5OqXyKshhhe6X6PLr0mA1TfbDGtnR7f'
})