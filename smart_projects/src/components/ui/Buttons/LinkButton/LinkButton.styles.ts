interface LinkButtonStyles {
  link: (backgoundColor: string | undefined) => React.CSSProperties;
  linkUnderline: React.CSSProperties;
}

export const linkButtonStyles: LinkButtonStyles = {
  link: (backgoundColor) => ({
    display: 'flex',
    justifyContent: 'center',
    justifySelf: 'center',
    marginBottom: 16,
    backgroundColor: backgoundColor,
    padding: '8px 16px',
    borderRadius: 24,
    color: 'white',
    textDecoration: 'none',
    marginLeft: 32,
    marginRight: 32,
  }),
  linkUnderline: {
    fontSize: 15,
    textDecoration: 'none',
  },
};
