import React from 'react';
import { useSocialList, icon } from './use-social-list';
import css from './social-icon-list.module.sass';
import cssVar from '../../theme/variables/js-variables.module.scss';

export const SocialIconList: React.FC = () => {
  const socialProfiles = useSocialList();
  return (
      <div className={css.socialIconList}>
        {socialProfiles.map(({ profileType, label, url }) => {
          const Icon = icon[profileType];
          return (
            <a
              key={profileType}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={css.socialIcon}>
              <Icon size={cssVar.xxlSize} />
              <span className={css.label}>{label}</span>
            </a>
          );
        })}
      </div>
  );
};
