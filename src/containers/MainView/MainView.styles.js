// const styles = ()=> {
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// };

export const styles = () => {
  return (
    {
      root: {
        height: '100%',
        padding: 10,
        overflowY: 'auto',
        '& .lowerContainer': {
          maxWidth: 1440,
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          overflow: 'hidden',
          '& .portfolioLinks': {
            margin: '20px 0px',
            '& .links': {
              opacity: 0,
              '&:not(:last-child)': {
                marginBottom: 20,
              },
              '& p': {
                margin: 0,
                fontSize: 'clamp(17px, 1.4vw, 40px)',
              },
              '& a': {
                color: 'inherit',
                fontSize: 'clamp(20px, 1.9vw, 80px)',
                textDecoration: 'none',
                fontWeight: 600,
              }
            }
          },
          '& .projects': {
            fontSize: 'clamp(20px, 1.9vw, 80px);',
            margin: '20px 0px',
          },
        },
      },
      day: {
        // background: 'linear-gradient(90deg, rgba(80,167,194,1) 32%, rgba(183,248,219,1) 100%)',
        // backgroundColor: 'linear-gradient(45deg, rgba(154,154,154,1) 23%, rgba(255,255,255,1) 78%)',
        background: '#dddddd',
        transition: 'background-color 400ms linear',
        '& .links': {
          color: '#393939 !important',
        }
      },
      night: {
        // background: 'linear-gradient(90deg, rgba(67,67,67,1) 50%, rgba(0,0,0,1) 100%)',
        background: '#393939',
        transition: 'background-color 400ms linear',
        '& .links': {
          color: '#dddddd !important',
        }
      }
    }
  );
}