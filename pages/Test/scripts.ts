import {
    Component,
    Vue
} from '~/node_modules/nuxt-property-decorator'

@Component({
    name: 'v-test',
})
export default class List extends Vue {

    public title: string = 'The Test Page';

    public nuxtI18n: any = {
        paths: {
            'en': '/test',
            'fr': '/test-fr',
        }
    };
}

