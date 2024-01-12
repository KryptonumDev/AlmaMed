// Single Types
import global, {global_Seo} from './singleTypes/global'
import IndexPage from './singleTypes/IndexPage'
import servicesPage from './singleTypes/servicesPage'
import PrivacyPolicy from './singleTypes/privacyPolicy'
import personal from './singleTypes/personal'
import forPatient from './singleTypes/forPatient'

export const singleTypes = [IndexPage, servicesPage, PrivacyPolicy, personal, forPatient]

// Collection Types
import localizations from './collectionTypes/localizations'
import services from './collectionTypes/services'
import posts from './collectionTypes/posts'
import categories from './collectionTypes/blogCategory'
import doctors from './collectionTypes/doctors'
import comments from './collectionTypes/comments'

export const collectionTypes = [localizations, services, posts, categories, doctors, comments]

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
import instructionListElement from './components/instructions'
import instructionListElementStep from './components/instructions-steps'
import flex from './components/flex'
import testLocalizations, {paragraph, list, link} from './components/testLocalizations'
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
  instructionListElement,
  instructionListElementStep,
  flex,
  testLocalizations,
  paragraph,
  list,
  link,
]

export const schemaTypes = [
  global,
  // Restructuring
  ...singleTypes,
  ...collectionTypes,
  ...components,
]
