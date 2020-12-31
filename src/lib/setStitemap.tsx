import fs from 'fs';
import { format } from 'date-fns';
import SiteMeta from '../config';

export function setSiteMap(fetchDate: Date) {
  let SitemapString: string;

  SitemapString = '<?xml version="1.0" encoding="UTF-8" ?>';
  SitemapString +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  SitemapString += '<url><loc>';
  SitemapString += SiteMeta.url;
  SitemapString += '</loc>';
  SitemapString += '<lastmod>';
  SitemapString += format(fetchDate, 'yyyy-MM-dd');
  SitemapString += 'T';
  SitemapString += format(fetchDate, 'hh:mmxxx');
  SitemapString += '</lastmod>';
  SitemapString += '<changefreq>monthly</changefreq>';
  SitemapString += '<priority>1.0</priority>';
  SitemapString += '</url></urlset>';

  fs.writeFile('public/sitemap.xml', SitemapString, 'utf8', () => {
    console.log('Sitemap.xml saved');
  });
}
