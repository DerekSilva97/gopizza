import styled from 'styled-components/native';

export const Center = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    justify-content: center;
    align-items: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
    size:"large",
    color: "#B83341",
})`
    
`;