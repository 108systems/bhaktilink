// UA-148048160-1
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  GA_TRACKING_ID && window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  GA_TRACKING_ID && window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
