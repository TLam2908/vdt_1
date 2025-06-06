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
  phone: string;
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
    <Preview>🎉 Product Registration Complete - Welcome to Viettel!</Preview>
    <Body style={main}>
      <Container style={container}>
        
        {/* Header */}
        <Section style={header}>
          <Row>
            <Column>
              <Text style={logo}>VIETTEL</Text>
            </Column>
            <Column align="right">
              <Text style={headerDate}>
                {props.createdAt.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Hero Section */}
        <Section style={heroSection}>
          <Text style={successEmoji}>🎉</Text>
          <Text style={heroTitle}>Registration Successful!</Text>
          <Text style={heroSubtitle}>
            Hi {props.name.split(' ')[0]}, your product is now officially registered and protected with Viettel.
          </Text>
        </Section>

        {/* Registration Summary Card */}
        <Section style={summaryCard}>
          <Text style={cardHeader}>Registration Summary</Text>
          
          <Row style={summaryRow}>
            <Column style={summaryLabelCol}>
              <Text style={summaryLabel}>Registration ID</Text>
            </Column>
            <Column>
              <Text style={summaryValue}>{props.id}</Text>
            </Column>
          </Row>

          <Hr style={dividerLine} />

          <Row style={summaryRow}>
            <Column style={summaryLabelCol}>
              <Text style={summaryLabel}>Registered To</Text>
            </Column>
            <Column>
              <Text style={summaryValue}>{props.name}</Text>
              <Text style={summarySecondary}>{props.email}</Text>
            </Column>
          </Row>

          <Hr style={dividerLine} />

          <Row style={summaryRow}>
            <Column style={summaryLabelCol}>
              <Text style={summaryLabel}>Delivery Address</Text>
            </Column>
            <Column>
              <Text style={summaryValue}>{props.street}</Text>
              <Text style={summarySecondary}>{props.district}, {props.city}</Text>
            </Column>
          </Row>
        </Section>

        {/* Product Details */}
        <Section style={productSection}>
          <Text style={sectionTitle}>Product Details</Text>
          
          <Section style={productCard}>
            <Row>
              <Column style={productIconCol}>
                <Text style={productEmoji}>📱</Text>
              </Column>
              <Column style={productDetailsCol}>
                <Text style={productTitle}>{props.productName}</Text>
                <Text style={productSpecs}>
                  <span style={specTag}>{props.productColor}</span>
                  <span style={specTag}>{props.productStorage}</span>
                </Text>
                <Text style={registrationDate}>
                  Registered on {props.createdAt.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </Column>
              <Column align="right" style={statusCol}>
                <Text style={activeStatus}>● ACTIVE</Text>
              </Column>
            </Row>
          </Section>
        </Section>

        {/* Benefits Grid */}
        <Section style={benefitsSection}>
          <Text style={sectionTitle}>Your Registration Benefits</Text>
          
          <Row style={benefitsGrid}>
            <Column style={benefitCard}>
              <Text style={benefitEmoji}>🛡️</Text>
              <Text style={benefitTitle}>Extended Warranty</Text>
              <Text style={benefitDesc}>Enhanced protection beyond standard coverage</Text>
            </Column>
            <Column style={benefitCard}>
              <Text style={benefitEmoji}>🚀</Text>
              <Text style={benefitTitle}>Priority Support</Text>
              <Text style={benefitDesc}>Skip the queue with dedicated assistance</Text>
            </Column>
          </Row>
          
          <Row style={benefitsGrid}>
            <Column style={benefitCard}>
              <Text style={benefitEmoji}>🎁</Text>
              <Text style={benefitTitle}>Exclusive Offers</Text>
              <Text style={benefitDesc}>Access to member-only deals and promotions</Text>
            </Column>
            <Column style={benefitCard}>
              <Text style={benefitEmoji}>🔧</Text>
              <Text style={benefitTitle}>Service Tracking</Text>
              <Text style={benefitDesc}>Easy repair and maintenance management</Text>
            </Column>
          </Row>
        </Section>

        {/* Important Notice */}
        <Section style={noticeSection}>
          <Text style={noticeTitle}>📋 Important</Text>
          <Text style={noticeText}>
            Please save this email as proof of registration. You'll need your registration ID {props.id} for warranty claims and support requests.
          </Text>
        </Section>

        {/* Footer */}
        <Hr style={footerDivider} />
        
        <Section style={footer}>
          <Text style={footerLinks}>
            <Link href="https://viettel.com/account" style={footerLink}>Account Settings</Link>
            {" · "}
            <Link href="https://viettel.com/support" style={footerLink}>Help Center</Link>
            {" · "}
            <Link href="https://viettel.com/privacy" style={footerLink}>Privacy Policy</Link>
          </Text>
          
          <Text style={footerCopyright}>
            © 2025 Viettel Group. All rights reserved.<br />
            Making technology accessible for everyone.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default RegistrationEmail;

// Modern Styles
const main = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  backgroundColor: "#f8fafc",
  margin: 0,
  padding: 0,
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
};

const header = {
  paddingBottom: "32px",
  borderBottom: "1px solid #e2e8f0",
  marginBottom: "40px",
};

const logo = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#dc2626",
  margin: "0",
  letterSpacing: "1px",
};

const headerDate = {
  fontSize: "14px",
  color: "#64748b",
  margin: "0",
};

const heroSection = {
  textAlign: "center" as const,
  paddingBottom: "40px",
};

const successEmoji = {
  fontSize: "48px",
  margin: "0 0 16px 0",
};

const heroTitle = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#0f172a",
  margin: "0 0 12px 0",
  lineHeight: "1.2",
};

const heroSubtitle = {
  fontSize: "18px",
  color: "#475569",
  margin: "0",
  lineHeight: "1.5",
};

const summaryCard = {
  backgroundColor: "#f8fafc",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "32px",
  border: "1px solid #e2e8f0",
};

const cardHeader = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#0f172a",
  margin: "0 0 20px 0",
};

const summaryRow = {
  paddingBottom: "16px",
};

const summaryLabelCol = {
  width: "140px",
  verticalAlign: "top" as const,
};

const summaryLabel = {
  fontSize: "14px",
  color: "#64748b",
  fontWeight: "500",
  margin: "0",
};

const summaryValue = {
  fontSize: "16px",
  color: "#0f172a",
  fontWeight: "600",
  margin: "0",
};

const summarySecondary = {
  fontSize: "14px",
  color: "#64748b",
  margin: "4px 0 0 0",
};

const dividerLine = {
  margin: "16px 0",
  borderColor: "#e2e8f0",
};

const productSection = {
  marginBottom: "40px",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#0f172a",
  margin: "0 0 20px 0",
};

const productCard = {
  backgroundColor: "#ffffff",
  border: "2px solid #e2e8f0",
  borderRadius: "12px",
  padding: "20px",
};

const productIconCol = {
  width: "60px",
  verticalAlign: "top" as const,
};

const productEmoji = {
  fontSize: "32px",
  margin: "0",
};

const productDetailsCol = {
  verticalAlign: "top" as const,
  paddingLeft: "16px",
};

const productTitle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#0f172a",
  margin: "0 0 8px 0",
};

const productSpecs = {
  margin: "0 0 8px 0",
};

const specTag = {
  display: "inline-block",
  backgroundColor: "#dbeafe",
  color: "#1e40af",
  fontSize: "12px",
  fontWeight: "500",
  padding: "4px 8px",
  borderRadius: "6px",
  marginRight: "8px",
};

const registrationDate = {
  fontSize: "14px",
  color: "#64748b",
  margin: "0",
};

const statusCol = {
  width: "80px",
  verticalAlign: "top" as const,
};

const activeStatus = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#059669",
  margin: "0",
};

const benefitsSection = {
  marginBottom: "40px",
};

const benefitsGrid = {
  marginBottom: "16px",
};

const benefitCard = {
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  padding: "20px",
  margin: "0 8px",
  textAlign: "center" as const,
  border: "1px solid #e2e8f0",
};

const benefitEmoji = {
  fontSize: "24px",
  margin: "0 0 8px 0",
};

const benefitTitle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#0f172a",
  margin: "0 0 6px 0",
};

const benefitDesc = {
  fontSize: "14px",
  color: "#64748b",
  margin: "0",
  lineHeight: "1.4",
};

const actionsSection = {
  textAlign: "center" as const,
  marginBottom: "40px",
};

const actionsTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#0f172a",
  margin: "0 0 20px 0",
};

const actionCol = {
  padding: "0 10px",
};

const primaryButton = {
  display: "inline-block",
  backgroundColor: "#dc2626",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  minWidth: "120px",
};

const secondaryButton = {
  display: "inline-block",
  backgroundColor: "#ffffff",
  color: "#dc2626",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "2px solid #dc2626",
  minWidth: "120px",
};

const noticeSection = {
  backgroundColor: "#fef3c7",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "40px",
  border: "1px solid #f59e0b",
};

const noticeTitle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#92400e",
  margin: "0 0 8px 0",
};

const noticeText = {
  fontSize: "14px",
  color: "#92400e",
  margin: "0",
  lineHeight: "1.5",
};

const footerDivider = {
  margin: "40px 0 32px 0",
  borderColor: "#e2e8f0",
};

const footer = {
  textAlign: "center" as const,
};

const footerLinks = {
  fontSize: "14px",
  margin: "0 0 16px 0",
};

const footerLink = {
  color: "#dc2626",
  textDecoration: "none",
};

const footerCopyright = {
  fontSize: "12px",
  color: "#64748b",
  margin: "0",
  lineHeight: "1.5",
};