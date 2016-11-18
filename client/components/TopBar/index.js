import style from './style.css'
import PathBtn from './pathBtn'

export default {
  render(h) {
	const pathBtns = this.$store.state.pathBtns;
    return (
        <div class={style['top-bar']}>
			<ul class={style['path-btn']}>
				{
					pathBtns.map((pathBtn, index) =>
						<PathBtn data={pathBtn} pathBtns={pathBtns} index={index} />
					)
				}
			</ul>
        </div>
    )
  }
}
