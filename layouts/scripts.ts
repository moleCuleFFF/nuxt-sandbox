import { Component, Vue } from '~/node_modules/nuxt-property-decorator';

@Component({
    components: {}
})
export default class App extends Vue {
    public appTitle: string = 'App Title Global';
}
