import { Typography } from "@mui/material";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const BasicSection = ({ title, children }: Props) => {
  return (
    <section>
      <Typography
        variant="h2"
        fontSize="2.25rem"
        textAlign="center"
        color="textPrimary"
        marginBottom={2}
      >
        {title}
      </Typography>
      {children}
    </section>
  );
};
