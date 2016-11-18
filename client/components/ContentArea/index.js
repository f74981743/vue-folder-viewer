import style from './style.css'
import GridRow from './GridRow'


export default {
  methods: {

      dragEnter(e) {
          e.stopPropagation();
          e.preventDefault();
      },

      dragOver(e) {
          e.stopPropagation();
          e.preventDefault();
      },

      dragLeave(e) {
          e.stopPropagation();
          e.preventDefault();
      },

      dropEvent(e) {
          e.stopPropagation();
          e.preventDefault();
          var length = e.dataTransfer.items.length;
          this.$store.dispatch('readEntries', e.dataTransfer.items);
          for (var i = 0; i < length; i++) {
                this.$store.dispatch('readDatas', e.dataTransfer.items[i].webkitGetAsEntry());
          }
      }

  },
  render(h) {
    return (
      <div class={style['content-area']} 
        on-drop={this.dropEvent} 
        on-dragenter={this.dragEnter}
        on-dragover={this.dragOver}
        on-dragleave={this.dragLeave}     
      >
      <table class={{table: true, 'table-hover': true}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Last Modified Date</th>
                <th>Size</th>
            </tr>
        </thead>
        <tbody>
        {
            this.$store.state.datas.datas.map((data, index) =>
                <GridRow data={data} />
            )
        }
        </tbody>
      </table>
      </div>
    )
  }
}
