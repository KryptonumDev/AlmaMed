// Single Types
import global, {global_Seo} from './singleTypes/global'
import IndexPage from './singleTypes/IndexPage'
import NotFoundPage from './singleTypes/NotFoundPage'
import servicesPage from './singleTypes/servicesPage'

export const singleTypes = [IndexPage, NotFoundPage, servicesPage]

// Collection Types
import localizations from './collectionTypes/localizations'
import services from './collectionTypes/services'
import posts from './collectionTypes/posts'
import categories from './collectionTypes/blogCategory'

export const collectionTypes = [localizations, services, posts, categories]

// Components
import cta from './components/cta'
import bigCta from './components/bigCta'
import seo from './components/seo'
import advantages from './components/advantages'
import listElement from './components/listElement'
import mentoringListElement from './components/mentoring'
import servicesTypes from './components/servicesTypes'
import faq from './components/faq'
import treatment from './components/treatment'
import {
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
} from './components/list'

export const components = [
  global_Seo,
  cta,
  advantages,
  listElement,
  bigCta,
  seo,
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
  mentoringListElement,
  servicesTypes,
  faq,
  treatment,
]

export const schemaTypes = [
  global,
  // Restructuring
  ...singleTypes,
  ...collectionTypes,
  ...components,
]
