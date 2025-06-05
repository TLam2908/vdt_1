import React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface RegistrationEmailProps {
  id: number;
  name: string;
  email: string;
  city: string;
  district: string;
  street: string;
  productName: string;
  productColor: string;
  productStorage: string;
  createdAt: Date;
}
const RegistrationEmail = ({ props }: { props: RegistrationEmailProps }) => (
  <Html>
    <Head />
    <Preview>Registration Confirmation - Welcome to Our Store</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column align="right" style={tableCell}>
              <Text style={heading}>Registration Confirmed</Text>
            </Column>
          </Row>
        </Section>

        <Section>
          <Text style={welcomeText}>
            Thank you for registering with us! Your product registration has
            been successfully completed.
          </Text>
        </Section>

        <Section style={informationTable}>
          <Row style={informationTableRow}>
            <Column colSpan={2}>
              <Section>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>REGISTRATION ID</Text>
                    <Text style={informationTableValue}>#{props.id}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>REGISTRATION DATE</Text>
                    <Text style={informationTableValue}>
                      {props.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>EMAIL</Text>
                    <Text style={informationTableValue}>{props.email}</Text>
                  </Column>
                </Row>
              </Section>
            </Column>
            <Column style={informationTableColumn} colSpan={2}>
              <Text style={informationTableLabel}>REGISTERED TO</Text>
              <Text style={informationTableValue}>{props.name}</Text>
              <Text style={informationTableValue}>{props.street}</Text>
              <Text style={informationTableValue}>
                {props.district}, {props.city}
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={productTitleTable}>
          <Text style={productsTitle}>Product Registration Details</Text>
        </Section>

        <Section>
          <Row>
            <Column style={{ paddingLeft: "22px" }}>
              <Text style={productTitle}>{props.productName}</Text>
              <Text style={productDescription}>
                Color: {props.productColor}
              </Text>
              <Text style={productDescription}>
                Storage: {props.productStorage}
              </Text>
              <Text style={productDescription}>
                Registered on {props.createdAt.toLocaleDateString()}
              </Text>
            </Column>
            <Column style={productStatusWrapper} align="right">
              <Text style={productStatus}>✓ Registered</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={productPriceLine} />

        <Section>
          <Text style={benefitsTitle}>Your Registration Benefits:</Text>
          <Text style={benefitItem}>• Extended warranty coverage</Text>
          <Text style={benefitItem}>• Priority customer support</Text>
          <Text style={benefitItem}>
            • Exclusive product updates and offers
          </Text>
          <Text style={benefitItem}>• Easy service and repair tracking</Text>
        </Section>

        <Section>
          <Row>
            <Column align="center" style={ctaSection}>
              <Text style={ctaText}>Need Help?</Text>
              <Link href="https://support.example.com" style={ctaLink}>
                Visit Support Center
              </Link>
            </Column>
          </Row>
        </Section>

        <Hr style={footerLine} />

        <Text style={footerText}>
          This email confirms your product registration. Please keep this email
          for your records. If you have any questions about your registration,
          please contact our support team.
        </Text>

        <Text style={footerTextCenter}>
          <Link href="https://example.com/account" style={footerLink}>
            Manage Your Account
          </Link>
          {" • "}
          <Link href="https://example.com/support" style={footerLink}>
            Contact Support
          </Link>
          {" • "}
          <Link href="https://example.com/privacy" style={footerLink}>
            Privacy Policy
          </Link>
        </Text>

        <Text style={footerCopyright}>
          Copyright © 2025 Viettel. <br />
          <Link href="https://example.com">All rights reserved</Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default RegistrationEmail;

// Styles
const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "660px",
  maxWidth: "100%",
};

const tableCell = { display: "table-cell" };

const heading = {
  fontSize: "32px",
  fontWeight: "300",
  color: "#888888",
};

const welcomeText = {
  textAlign: "center" as const,
  margin: "36px 0 40px 0",
  fontSize: "16px",
  fontWeight: "400",
  color: "#111111",
  lineHeight: "24px",
};

const informationTable = {
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "12px",
};

const informationTableRow = {
  minHeight: "46px",
};

const informationTableColumn = {
  paddingLeft: "20px",
  borderStyle: "solid",
  borderColor: "white",
  borderWidth: "0px 1px 1px 0px",
  minHeight: "44px",
};

const informationTableLabel = {
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
  color: "rgb(102,102,102)",
  fontSize: "10px",
};

const informationTableValue = {
  fontSize: "12px",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const productTitleTable = {
  ...informationTable,
  margin: "30px 0 15px 0",
  minHeight: "24px",
};

const productsTitle = {
  background: "#fafafa",
  paddingLeft: "10px",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
};

const productIcon = {
  margin: "0 0 0 20px",
  borderRadius: "14px",
  border: "1px solid rgb(242,242,242)",
};

const productTitle = {
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const productDescription = {
  fontSize: "12px",
  color: "rgb(102,102,102)",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const productStatusWrapper = {
  display: "table-cell",
  padding: "0px 20px 0px 0px",
  width: "120px",
  verticalAlign: "top",
};

const productStatus = {
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
  color: "#22c55e",
};

const productPriceLine = { margin: "30px 0 20px 0" };

const benefitsTitle = {
  fontSize: "16px",
  fontWeight: "600",
  margin: "20px 0 10px 0",
  color: "#111111",
};

const benefitItem = {
  fontSize: "14px",
  margin: "8px 0",
  color: "#333333",
  lineHeight: "20px",
};

const ctaSection = {
  display: "block",
  margin: "30px 0",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
};

const ctaText = {
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 10px 0",
  color: "#111111",
};

const ctaLink = {
  color: "#0066cc",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

const footerLine = { margin: "40px 0 20px 0" };

const footerText = {
  fontSize: "12px",
  color: "rgb(102,102,102)",
  margin: "0 0 16px 0",
  lineHeight: "18px",
};

const footerTextCenter = {
  fontSize: "12px",
  color: "rgb(102,102,102)",
  margin: "20px 0",
  lineHeight: "auto",
  textAlign: "center" as const,
};

const footerLink = { color: "rgb(0,115,255)" };

const footerIcon = { display: "block", margin: "30px 0 0 0" };

const footerCopyright = {
  margin: "25px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};
