export const state: () => RootState = () => ({
    version: '1.0.0',
    build: process.env.VUE_APP_COMMIT || 'development',
});

/**
 * VueX Global Types file
 */
export interface RootState {
    version: string;
    build?: string;
}
