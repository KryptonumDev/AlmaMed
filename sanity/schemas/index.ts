// Single Types
import global, {global_Seo} from './singleTypes/global'
import IndexPage from './singleTypes/IndexPage'
import servicesPage from './singleTypes/servicesPage'
import PrivacyPolicy from './singleTypes/privacyPolicy'
import personal from './singleTypes/personal'
import forPatient from './singleTypes/forPatient'
import contact from './singleTypes/contact'
import Blog from './singleTypes/blog'
import Search from './singleTypes/search'
import Sitemap from './singleTypes/sitemap'

export const singleTypes = [IndexPage, servicesPage, personal, forPatient, Blog, contact, PrivacyPolicy, Search, Sitemap]

// Collection Types
import localizations from './collectionTypes/localizations'
import services from './collectionTypes/services'
import posts from './collectionTypes/posts'
import categories from './collectionTypes/blogCategory'
import doctors from './collectionTypes/doctors'
import comments from './collectionTypes/comments'

export const collectionTypes = [localizations, services, doctors, posts, categories, comments]

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
import blocks, {icon} from './components/blocks'
import {
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
} from './components/list'
import services_specialists from './components/services-doctor'
import {ImageColumn, Cta} from './components/portableText'
import PortableText from '../components/PortableText'
import headerLink, {headerSubLink} from './components/headerLink'
import advantageCard from './components/advantageCard'

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
  blocks,
  icon,
  services_specialists,
  ImageColumn,
  PortableText,
  Cta,
  headerSubLink,
  headerLink,
  advantageCard
]

export const schemaTypes = [
  global,
  // Restructuring
  ...singleTypes,
  ...collectionTypes,
  ...components,
]
