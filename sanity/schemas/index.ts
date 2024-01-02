// Single Types
import global, {global_Seo} from './singleTypes/global'
import IndexPage from './singleTypes/IndexPage'
import NotFoundPage from './singleTypes/NotFoundPage'
import servicesPage from './singleTypes/servicesPage'

export const singleTypes = [IndexPage, NotFoundPage, servicesPage]

// Collection Types
import localizations from './collectionTypes/localizations'
import services from './collectionTypes/services'

export const collectionTypes = [localizations, services]

// Components
import cta from './components/cta'
import bigCta from './components/bigCta'
import seo from './components/seo'
import advantages from './components/advantages'
import listElement from './components/listElement'
import mentoringListElement from './components/mentoring'
import servicesTypes from './components/servicesTypes'
import faq from './components/faq'
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
  faq
]

export const schemaTypes = [
  global,
  // Restructuring
  ...singleTypes,
  ...collectionTypes,
  ...components,
]
