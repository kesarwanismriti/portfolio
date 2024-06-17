import React, { Component } from "react";
import { css } from "aphrodite";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Title400 from "../components/Title400";
import Title500 from "../components/Title500";
import Link from "../components/Link";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import CaseStudyCard from "../components/CaseStudyCard";
import Footer from "../components/Footer";
import { globalStyles } from "../components/GlobalStyles";

export default class PrivacyTermsPage extends Component {
  componentDidMount() {
    document.title += " — Privacy + Terms";
  }
  render() {
    return (
      <div>
        <Header />
        <Hero
          sequence="&mdash;"
          title="Privacy + Terms."
          descriptions={["The legal bit."]}
        />

        <Section>
          <div className={css(globalStyles.maxWidth600)}>
            <h1>
              <Title400>Privacy + Terms</Title400>
            </h1>

            <Title500>
              <h2>What is this Privacy Policy for?</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This privacy policy is for this website
                [www.lukejamestaylor.com] and served by Design Sprint Ltd and
                governs the privacy of its users who choose to use it.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                The policy sets out the different areas where user privacy is
                concerned and outlines the obligations & requirements of the
                users, the website and website owners. Furthermore the way this
                website processes, stores and protects user data and information
                will also be detailed within this policy.
              </Paragraph>
            </div>

            <Title500>
              <h2>The Website</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This website and its owners take a proactive approach to user
                privacy and ensure the necessary steps are taken to protect the
                privacy of its users throughout their visiting experience. This
                website complies to all UK national laws and requirements for
                user privacy.
              </Paragraph>
            </div>

            <Title500>
              <h2>Use of Cookies</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This website uses cookies to better the users experience while
                visiting the website. Where applicable this website uses a
                cookie control system allowing the user on their first visit to
                the website to allow or disallow the use of cookies on their
                computer / device. This complies with recent legislation
                requirements for websites to obtain explicit consent from users
                before leaving behind or reading files such as cookies on a
                user's computer / device.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Cookies are small files saved to the user's computers hard drive
                that track, save and store information about the user's
                interactions and usage of the website. This allows the website,
                through its server to provide the users with a tailored
                experience within this website.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Users are advised that if they wish to deny the use and saving
                of cookies from this website on to their computers hard drive
                they should take necessary steps within their web browsers
                security settings to block all cookies from this website and its
                external serving vendors.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This website uses tracking software to monitor its visitors to
                better understand how they use it. This software is provided by
                Google Analytics which uses cookies to track visitor usage. The
                software will save a cookie to your computers hard drive in
                order to track and monitor your engagement and usage of the
                website, but will not store, save or collect personal
                information. You can read Google's privacy policy here for
                further information [ http://www.google.com/privacy.html ].
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Other cookies may be stored to your computers hard drive by
                external vendors when this website uses referral programs,
                sponsored links or adverts. Such cookies are used for conversion
                and referral tracking and typically expire after 30 days, though
                some may take longer. No personal information is stored, saved
                or collected.
              </Paragraph>
            </div>
            <Title500>
              <h2>Contact & Communication</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Users contacting this website and/or its owners do so at their
                own discretion and provide any such personal details requested
                at their own risk. Your personal information is kept private and
                stored securely until a time it is no longer required or has no
                use, as detailed in the Data Protection Act 1998. Every effort
                has been made to ensure a safe and secure form to email
                submission process but advise users using such form to email
                processes that they do so at their own risk.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This website and its owners use any information submitted to
                provide you with further information about the products /
                services they offer or to assist you in answering any questions
                or queries you may have submitted. This includes using your
                details to subscribe you to any email newsletter program the
                website operates but only if this was made clear to you and your
                express permission was granted when submitting any form to email
                process. Or whereby you the consumer have previously purchased
                from or enquired about purchasing from the company a product or
                service that the email newsletter relates to. This is by no
                means an entire list of your user rights in regard to receiving
                email marketing material. Your details are not passed on to any
                third parties.
              </Paragraph>
            </div>

            <Title500>
              <h2>External Links</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Although this website only looks to include quality, safe and
                relevant external links, users are advised adopt a policy of
                caution before clicking any external web links mentioned
                throughout this website.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                The owners of this website cannot guarantee or verify the
                contents of any externally linked website despite their best
                efforts. Users should therefore note they click on external
                links at their own risk and this website and its owners cannot
                be held liable for any damages or implications caused by
                visiting any external links mentioned.
              </Paragraph>
            </div>

            <Title500>
              <h2>Adverts and Sponsored Links</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This website may contain sponsored links and adverts. These will
                typically be served through our advertising partners, to whom
                may have detailed privacy policies relating directly to the
                adverts they serve.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Clicking on any such adverts will send you to the advertisers
                website through a referral program which may use cookies and
                will track the number of referrals sent from this website. This
                may include the use of cookies which may in turn be saved on
                your computers hard drive. Users should therefore note they
                click on sponsored external links at their own risk and this
                website and its owners cannot be held liable for any damages or
                implications caused by visiting any external links mentioned.
              </Paragraph>
            </div>

            <Title500>
              <h2>Social Media Platforms</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Communication, engagement and actions taken through external
                social media platforms that this website and its owners
                participate on are custom to the terms and conditions as well as
                the privacy policies held with each social media platform
                respectively.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Users are advised to use social media platforms wisely and
                communicate / engage upon them with due care and caution in
                regard to their own privacy and personal details. This website
                nor its owners will ever ask for personal or sensitive
                information through social media platforms and encourage users
                wishing to discuss sensitive details to contact them through
                primary communication channels such as by telephone or email.
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This website may use social sharing buttons which help share web
                content directly from web pages to the social media platform in
                question. Users are advised before using such social sharing
                buttons that they do so at their own discretion and note that
                the social media platform may track and save your request to
                share a web page respectively through your social media platform
                account.
              </Paragraph>
            </div>
            <Title500>
              <h2>Shortened Links in Social Media</h2>
            </Title500>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                This website and its owners through their social media platform
                accounts may share web links to relevant web pages. By default
                some social media platforms shorten lengthy urls [web addresses]
                (this is an example: http://bit.ly/zyVUBo).
              </Paragraph>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Paragraph size="small">
                Users are advised to take caution and good judgement before
                clicking any shortened urls published on social media platforms
                by this website and its owners. Despite the best efforts to
                ensure only genuine urls are published many social media
                platforms are prone to spam and hacking and therefore this
                website and its owners cannot be held liable for any damages or
                implications caused by visiting any shortened links.
              </Paragraph>
            </div>

            <Title500>
              <h2>Session Recording</h2>
            </Title500>

            {/* <Paragraph size="small">
              We use Hotjar in order to better understand our users’ needs and
              to optimise this service and experience. Hotjar is a technology
              service that helps us better understand our users’ experience
              (e.g. how much time they spend on which pages, which links they
              choose to click, what users do and don’t like, etc.) and this
              enables us to build and maintain our service with user feedback.
              Hotjar uses cookies and other technologies to collect data on our
              users’ behavior and their devices. This includes a device's IP
              address (processed during your session and stored in a
              de-identified form), device screen size, device type (unique
              device identifiers), browser information, geographic location
              (country only), and the preferred language used to display our
              website. Hotjar stores this information on our behalf in a
              pseudonymized user profile. Hotjar is contractually forbidden to
              sell any of the data collected on our behalf. For further details,
              please see the ‘about Hotjar’ section of{" "}
              <a href="https://help.hotjar.com/hc/en-us/categories/115001323967-About-Hotjar">
                Hotjar’s support site.
              </a>
            </Paragraph> */}
          </div>
        </Section>

        <Section background="grey">
          <Title400>
            <h2>
              Now you've read all of that in detail, take a look at this...
            </h2>
          </Title400>
          <CaseStudyCard
            title={"Highlighted Case Study"}
            description={"Improving Feature Adoption  ⟶"}
            meta={
              <Link styleOnly={true} size={"small"}>
                View Case Study
              </Link>
            }
            link={"/case-studies/improving-feature-adoption/"}
          />
        </Section>

        <Footer />
      </div>
    );
  }
}
