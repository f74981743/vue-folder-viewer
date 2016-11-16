export default {
    methods: {
        click() {
            //const {data, actions, dataPerPage, pathBtns, index} = this.props;
            var fn = this,
                entryAry = [];
            if (this.data.isDirectory) {
                //actions.mask(true);
                var dirReader = this.data.createReader();
                    var readEntries = function () {
                        dirReader.readEntries(function (entries) {
                            if (entries.length) {
                                for (var i = 0; i < entries.length; i++) {
                                    entryAry.push(entries[i]);
                                }     
                                readEntries();
                            } else {
                                fn.$store.dispatch('readEntries', entryAry);
                                var n = 0,
                                    length = entryAry.length;
                                    //length = Math.min(dataPerPage, entryAry.length);
                                var addEntry = function() {
                                    if (n < length) {
                                        if (entryAry[n].isFile) {
                                            entryAry[n].file((file) => {
                                                fn.$store.dispatch('readDatas', file);
                                                n++;
                                                addEntry();
                                            });
                                        } else {
                                            fn.$store.dispatch('readDatas', entryAry[n]);
                                            n++;
                                            addEntry();
                                        }
                                        
                                    }/* else {
                                        actions.mask(false);
                                    }*/
                                };
                                addEntry();
                                
                            }
                        });
                    };
                    this.$store.dispatch('resetDatas');
                    //actions.clickPage(1, [1, 2, 3, 4, 5]);
                    readEntries();
                    //var newPathBtns = this.pathBtns.slice(0, this.index + 1);
                    this.$store.dispatch('clickPathBtn', this.index);
            }
        }
    },
    props: ['data', 'pathBtns', 'index'],
    render(h) {
        return(
            <li on-click={this.click}>
                {this.data.name}
            </li>
        )
    }
}