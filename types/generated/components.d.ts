import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutContainer extends Schema.Component {
  collectionName: 'components_layout_containers';
  info: {
    displayName: 'Container';
    icon: 'archive';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    imageOnRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.container': LayoutContainer;
    }
  }
}
