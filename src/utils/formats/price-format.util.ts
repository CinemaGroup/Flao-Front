export const priceFormat = (price?: number | null) => {
	return price?.toLocaleString('ru-RU')
}
