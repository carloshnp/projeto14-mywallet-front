import styled from "styled-components";
import dayjs from 'dayjs'

export default function Operation(props) {
    const { value, description, date, type, _id } = props

    const adjustDate = dayjs(date).format("DD/MM");

    return (
        <Container key={_id} type={type}>
            <OperationContainer>
                <DateContainer>{adjustDate}</DateContainer>
                <DescriptionContainer>{description}</DescriptionContainer>
            </OperationContainer>
            <ValueContainer>{Number(value).toFixed(2)}</ValueContainer>

        </Container>
    )
};

const Container = styled.div`
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`

const OperationContainer = styled.div`
    display: flex;
`

const DateContainer = styled.div`
    width: 48px;
    color: #C6C6C6;
`

const DescriptionContainer = styled.div`
    color: #000000;
`

const ValueContainer = styled.div`
    color: ${(props) => (props.type === 'in' ? '#03AC00' : '#C70000')}
`