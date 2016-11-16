export default {
    methods: {
        dbClick() {
            var fn = this,
                entryAry = [];
            if (this.data.isDirectory) {
                var dirReader = this.data.createReader();

                var readEntries = function() {
                    dirReader.readEntries(function(entries) {
                        if (entries.length) {
                            for (var i = 0; i < entries.length; i++) {
                                entryAry.push(entries[i]);
                            }
                            readEntries();
                        } else {
                            fn.$store.dispatch('readEntries', entryAry);
                            var n = 0,
                                length = entryAry.length;
                            
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
                                }
                            };
                            addEntry();
                        }
                    })
                };
                this.$store.dispatch('resetDatas');
                readEntries();
                this.$store.dispatch('addPathBtn', this.data);
            }
        }
    },
    props: ['data'],
    render(h) {
        return (
            <tr on-dblclick={this.dbClick}>
                <td>
                    {this.data.name}
                </td>
                <td>
                    {(this.data.isDirectory) ? 'dir' : this.data.type}
                </td>
                <td>
                    {this.data.lastModified}
                </td>
                <td>
                    {this.data.size}
                </td>
            </tr>
        )
    }
}