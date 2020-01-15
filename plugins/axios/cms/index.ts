import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '~/node_modules/@nuxtjs/axios';

declare module 'vue/types/vue' {
    interface Vue {
        $cms: NuxtAxiosInstance
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $cms: NuxtAxiosInstance
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $cms: NuxtAxiosInstance
    }
}

const cms: Plugin = ({$axios}, inject) => {
    //@ts-ignore https://github.com/nuxt-community/axios-module/issues/322
    const cms: NuxtAxiosInstance = $axios.create({
        headers: {
            common: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        },
        params: {
            _format: 'json'
        },
        withCredentials: true,
    });

    //@ts-ignore https://github.com/nuxt-community/axios-module/issues/322
    cms.setBaseURL('https://cms-api.co.uk');
    inject('cms', cms)
};

export default cms
