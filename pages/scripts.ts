import { Component, Vue } from '~/node_modules/nuxt-property-decorator';
import { Store } from 'vuex/types/index';
import { RootState } from '~/store';

@Component({
    name: 'v-home',
    components: {

    }
})
export default class Home extends Vue {

    public homePageTitle: string = 'Home Page';

    /**
     * Fetch data
     */
    public async asyncData ({ store }: {store: Store<RootState>}): Promise<void> {
        return await store.dispatch('modules/content/fetchBlocks');
    }

}
