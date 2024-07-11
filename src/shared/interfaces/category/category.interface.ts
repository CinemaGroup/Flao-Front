import type { AllCategories, Category } from '@/__generated__/output'
import type { TypeCategoryVariant } from '@/shared/types/category/category.type'
import type { IClassName } from '../class-name/class-name.interface'

export interface ICategories extends AllCategories {
	className?: string
	variant: TypeCategoryVariant
	hasHeading?: boolean
}

export interface ICategory extends IClassName {
	category: Category
	variant: TypeCategoryVariant
}
