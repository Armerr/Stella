import type {JSX} from 'react'

import {IonIosArrowDown} from '../icons/arrow'
import {FloatPopover} from '../../ui/float-popover'
import {clsxm} from '../../lib/helper'

import type {FooterConfig} from './config'
import {defaultLinkSections} from './config'

export const FooterInfo = () => {
    return (
        <>
            <div className="relative">
                <FooterLinkSection/>
            </div>
            <FooterBottom/>
        </>
    )
}

const FooterLinkSection = () => {
    const footerConfig: FooterConfig = {
        linkSections: defaultLinkSections,
    }

    return (
        <div className="space-x-0 space-y-3 md:space-x-6 md:space-y-0">
            {footerConfig.linkSections.map((section) => {
                return (
                    <div
                        className="flex items-center gap-4 md:inline-flex"
                        key={section.name}
                    >
                        <b className="inline-flex items-center font-medium">
                            {section.name}
                            <IonIosArrowDown className="ml-2 inline -rotate-90 select-none"/>
                        </b>

                        <span className="space-x-4 text-neutral-content/90">
              {section.links.map((link) => {
                  return (
                      <StyledLink
                          external={link.external}
                          className="link-hover link"
                          href={link.href}
                          key={link.name}
                      >
                          {link.name}
                      </StyledLink>
                  )
              })}
            </span>
                    </div>
                )
            })}
        </div>
    )
}

const StyledLink = (
    props: JSX.IntrinsicElements['a'] & {
        external?: boolean
    },
) => {
    const {external, ...rest} = props
    const As = 'a'

    return (
        // @ts-ignore
        <As
            className="link-hover link"
            target={props.external ? '_blank' : props.target}
            {...rest}
        >
            {props.children}
        </As>
    )
}
const Divider: Component = ({className}) => {
    return (
        <span className={clsxm('select-none whitespace-pre opacity-50', className)}>
      {' '}
            |{' '}
    </span>
    )
}

const PoweredBy: Component = ({className}) => {
    return (
        <span className={className}>
      Powered by{' '}
            <StyledLink href="https://github.com/mx-space" target="_blank">
        Mix Space
      </StyledLink>
      <span className="mx-1">&</span>
      <FloatPopover
          mobileAsSheet
          type="tooltip"
          triggerElement={
              <StyledLink href="https://github.com/innei/Shiro" target="_blank">
                  Shiro
              </StyledLink>
          }
      >
      </FloatPopover>
    </span>
    )
}

const FooterBottom = () => {

    const data = {"theme": {"footer": {"otherInfo": {"date": "", "icp": {"text": "", "link": ""}}}}}
    const {footer} = data.theme
    const footerConfig = footer || {}
    const {otherInfo} = footerConfig
    const currentYear = new Date().getFullYear().toString()
    const {date = currentYear, icp} = otherInfo || {}

    return (
        <div className="mt-12 space-y-3 text-center md:mt-6 md:text-left">
            <p>
                <span>© {date.replace('{{now}}', currentYear)} </span>
                <a href="/">
                </a>
                <span>.</span>
                <span>
          <Divider/>
          <a href="/sitemap.xml" target="_blank" rel="noreferrer">
            站点地图
          </a>

        </span>
                <span className="mt-3 block md:mt-0 md:inline">
          Stay hungry. Stay foolish.
        </span>
            </p>
            <div>
                <PoweredBy className="my-3 block md:my-0 md:inline"/>
                {icp && (
                    <>
                        <Divider className="hidden md:inline"/>
                        <StyledLink href={icp.link} target="_blank" rel="noreferrer">
                            {icp.text}
                        </StyledLink>
                    </>
                )}

                {icp ? (
                    <Divider className="inline"/>
                ) : (
                    <Divider className="hidden md:inline"/>
                )}
                {/* {!!lastVisitor && (
          <>
            <Divider />
            <span>
              最近访客来自&nbsp;
              {lastVisitor.flag}&nbsp;
              {[lastVisitor.city, lastVisitor.country]
                .filter(Boolean)
                .join(', ')}
            </span>
          </>
        )} */}
            </div>
        </div>
    )
}
