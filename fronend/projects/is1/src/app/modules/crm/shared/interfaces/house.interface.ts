import { IEntity, IFlat } from 'lib/interfaces';

import { IResidentialComplex } from './complex.interface';
import { IDocument } from './document.interface';

export interface IHouse extends IEntity {
  address: string;
  class: string;
  type: string;
  ceilingHeight: number;
  description: string;
  basement: string;
  facingMaterial: string;
  stainedGlass: string;
  technicalFloor: boolean;
  operatedRoof: boolean;
  entryGroup: string;
  elevatorHall: string;
  stairway: string;
  shahmatId: number;
  interroomHall: string;
  garbageChute: string;
  transitionGalleries: string;
  furnish: string;
  commerce: string;
  floors: number;
  lift: string;
  startQuarter: number;
  startYear: number;
  finishQuarter: number;
  finishYear: number;
  finished: boolean;
  residentialComplex?: IResidentialComplex;
  residentialComplexName?: string;
  cityName?: string;
  projectDocuments: IDocument[];
  externalResource: string;
  keyTransfer?: string;
  flats?: IFlat[];
}
