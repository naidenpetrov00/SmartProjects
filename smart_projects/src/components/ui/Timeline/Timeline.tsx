import * as React from 'react';

import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { Box } from '@mui/material';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ConstructionIcon from '@mui/icons-material/Construction';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import { useSteps } from '../../../hooks/useSteps';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      },
    },
  ],
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <QuestionAnswerIcon />,
    2: <ConnectWithoutContactIcon />,
    3: <TroubleshootIcon />,
    4: <PriceChangeIcon />,
    5: <ConstructionIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      role="img"
      aria-label={`Step ${props.icon}`}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

export default function Timeline() {
  const steps = useSteps();

  return (
    <Box sx={{ mt: 2, ml: 1, mr: 0.5 }}>
      <Stepper
        alternativeLabel
        activeStep={1}
        connector={<ColorlibConnector />}
        aria-labelledby="stepper-timeline"
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              sx={{
                borderRadius: 2,
                borderColor: 'black',
                '& .MuiStepLabel-label': { color: 'black !important' },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
