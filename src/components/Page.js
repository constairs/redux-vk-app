import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'

const masonryOptions = {
	transitionDuration: '0.3s',
	gutter: 20,
	stagger: 30,
}

const imagesLoadedOptions = { background: '.my-bg-image-el'}

export default class Page extends Component {
	onYearBtnClick(e) {
		this.props.getPhotos(+e.target.textContent)
	}
	render() {
		const { year, photos, fetching, error } = this.props
		const years = [2018,2017,2016,2015]

		return (
		<div className="ib page">
				<p className="years-switch">
			{	years.map((item,index) => <button onClick={this.onYearBtnClick.bind(this)} key={index} className="btn">{item}</button>)}
			</p>
			<h3 className="year-title">{year} год</h3>
			{ error ? <p className='error'>Произошла ошибка</p>: ''}
			
			{
				fetching?
					<p>Загрузка...</p>
				:
				<Masonry
          className="photos-gallery"
          elementType={'div'}
          options={masonryOptions}
					imagesLoadedOptions={imagesLoadedOptions}
        >
				{
					photos.map((entry, index) =>
						<div key={index} className="photo my-bg-image-el">
							<p><img src={entry.photo_604 ? entry.photo_604 : entry.photo_130}  /></p>
							<p className="photo-info">{`${entry.likes.count} `} <i className="fa fa-heart-o"></i></p>
						</div>)
				}
        </Masonry>
			}
		</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired
}