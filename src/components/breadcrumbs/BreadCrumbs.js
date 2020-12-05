export default {
    name: 'BreadCrumbs',
    props: {},
    data: () => {
        return {}
    },
    computed: {
        breadCrumbList() {
            let pathArray = this.$route.path.split("/")
            pathArray.shift()
            let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
                breadcrumbArray.push({
                    path: path,
                    to: breadcrumbArray[idx - 1]
                        ? "/" + breadcrumbArray[idx - 1].path + "/" + path
                        : "/" + path,
                    text: this.$route.matched[idx].meta.breadCrumb || path,
                });
                return breadcrumbArray;
            }, []);

            console.log(breadcrumbs);
            return breadcrumbs;
        }
    }
};