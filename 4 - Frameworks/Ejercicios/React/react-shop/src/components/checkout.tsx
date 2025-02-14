import { FC, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { CheckoutProps, ShippingForm, PaymentForm } from "../types/types";

const steps = ["Cart Review", "Shipping Address", "Payment"];

export const Checkout: FC<CheckoutProps> = ({ items, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shipping, setShipping] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [payment, setPayment] = useState<PaymentForm>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Here you would typically process the order
    console.log("Order submitted:", { items, shipping, payment });
    onClose();
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <List>
              {items.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.title}
                    secondary={`${item.quantity} x $${item.price}`}
                  />
                  <Typography variant="body1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </ListItem>
              ))}
              <Divider sx={{ my: 2 }} />
              <ListItem>
                <ListItemText primary="Total" />
                <Typography variant="h6">${total.toFixed(2)}</Typography>
              </ListItem>
            </List>
          </Box>
        );

      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                value={shipping.firstName}
                onChange={(e) =>
                  setShipping({ ...shipping, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={shipping.lastName}
                onChange={(e) =>
                  setShipping({ ...shipping, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={shipping.address}
                onChange={(e) =>
                  setShipping({ ...shipping, address: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                value={shipping.city}
                onChange={(e) =>
                  setShipping({ ...shipping, city: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Zip Code"
                value={shipping.zipCode}
                onChange={(e) =>
                  setShipping({ ...shipping, zipCode: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Country"
                value={shipping.country}
                onChange={(e) =>
                  setShipping({ ...shipping, country: e.target.value })
                }
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                value={payment.cardNumber}
                onChange={(e) =>
                  setPayment({ ...payment, cardNumber: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                placeholder="MM/YY"
                value={payment.expiryDate}
                onChange={(e) =>
                  setPayment({ ...payment, expiryDate: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                value={payment.cvv}
                onChange={(e) =>
                  setPayment({ ...payment, cvv: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Holder Name"
                value={payment.cardHolder}
                onChange={(e) =>
                  setPayment({ ...payment, cardHolder: e.target.value })
                }
              />
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper sx={{ p: 3 }}>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" onClick={handleSubmit}>
              Place Order
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};
