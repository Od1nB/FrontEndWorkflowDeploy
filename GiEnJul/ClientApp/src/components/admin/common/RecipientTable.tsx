import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import {
  ExpandMore,
  Group,
  Phone,
  Mail,
  CheckRounded,
  CloseRounded,
} from "@material-ui/icons";
import { RecipientType } from "../overview/Recipient";
import useStyles from "./Styles";

type Props = {
  data: RecipientType[] | [];
  handleRecipientChange: (
    newRecipientRowKey: string,
    newRecipientPartitionKey: string
  ) => void;
};

const DatatableRecipient: React.FC<Props> = ({
  data,
  handleRecipientChange,
}) => {
  const classes = useStyles();

  const formatFamily = (input: Number) => {
    if (input < 3) {
      return "< 3";
    }
    if (input > 5) {
      return "> 5";
    } else {
      return "3 - 5";
    }
  };

  const handleMatched = (input: Boolean) => {
    if (input) {
      return classes.matched;
    } else {
      return classes.notMatched;
    }
  };

  const handleGender = (gender: Number, age: Number) => {
    if (age < 18) {
      switch (gender) {
        case 0:
          return "Ukjent";
        case 1:
          return "Gutt";
        case 2:
          return "Jente";
        default:
      }
    } else {
      switch (gender) {
        case 0:
          return "Ukjent";
        case 1:
          return "Mann";
        case 2:
          return "Kvinne";
        default:
      }
    }
  };

  return (
    <Container>
      {data.map((recipient) => (
        <Accordion
          onChange={() =>
            handleRecipientChange(recipient.rowKey, recipient.partitionKey)
          }
          key={recipient.rowKey}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              {recipient.referenceId}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              <Group />
              {formatFamily(recipient.familyMembers.length)}
            </Typography>
            <Avatar className={handleMatched(recipient.isSuggestedMatch)}>
              {recipient.isSuggestedMatch ? (
                <CheckRounded style={{ color: "#49a591" }} />
              ) : (
                <CloseRounded style={{ color: "#ed8175" }} />
              )}
            </Avatar>
          </AccordionSummary>
          <Divider />
          <AccordionDetails className={classes.largeColumn}>
            <Typography>Ønsker:</Typography>
          </AccordionDetails>
          {recipient.familyMembers.map((person) => (
            <div key={person.rowKey}>
              <AccordionDetails>
                <Typography className={classes.smallColumn}>
                  {handleGender(person.gender, person.age)}
                </Typography>
                <Typography className={classes.smallColumn}>
                  {" "}
                  {person.age} år{" "}
                </Typography>
                <Typography className={classes.largeColumn}>
                  {" "}
                  {person.wish}{" "}
                </Typography>
              </AccordionDetails>
              <Divider />
            </div>
          ))}
          <AccordionDetails>
            <Typography className={classes.mediumColumn}>
              Matønsker:{" "}
            </Typography>
            <Typography className={classes.largeColumn}>
              {recipient.dinner}, {recipient.dessert} {recipient.note}
            </Typography>
          </AccordionDetails>
          <Divider />
          <AccordionDetails>
            <Typography className={classes.mediumColumn}>
              Kontaktperson:
            </Typography>
            <Typography className={classes.largeColumn}>
              {recipient.contactFullName}
              <br />
              <Phone /> {recipient.contactPhoneNumber}
              <br />
              <Mail /> {recipient.contactEmail}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default DatatableRecipient;
