import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li className="menu-item-has-children">
              <Link href="/service/digital-marketing" onClick={() => setMobileToggle(false)}>
                Digital Marketing
              </Link>
              <DropDown>
                <ul>
                  <li>
                    <Link href="/service/seo" onClick={() => setMobileToggle(false)}>
                      SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/smm" onClick={() => setMobileToggle(false)}>
                      SMM
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/ppc" onClick={() => setMobileToggle(false)}>
                      PPC
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/email-marketing" onClick={() => setMobileToggle(false)}>
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/whatsapp-marketing" onClick={() => setMobileToggle(false)}>
                      WhatsApp Marketing
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <Link href="/service/web-development" onClick={() => setMobileToggle(false)}>
                Web Development
              </Link>
              <DropDown>
                <ul>
                  <li>
                    <Link href="/service/crm" onClick={() => setMobileToggle(false)}>
                      CRM
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/erp" onClick={() => setMobileToggle(false)}>
                      ERP
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/ecommerce" onClick={() => setMobileToggle(false)}>
                      Ecommerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/lms" onClick={() => setMobileToggle(false)}>
                      LMS
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li>
              <Link href="/service/mobile-application" onClick={() => setMobileToggle(false)}>
                Mobile Application
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link href="/project" onClick={() => setMobileToggle(false)}>
          Projects
        </Link>
      </li>

      <li>
        <Link href="/faq" onClick={() => setMobileToggle(false)}>
          FAQ
        </Link>
      </li>

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li>
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
