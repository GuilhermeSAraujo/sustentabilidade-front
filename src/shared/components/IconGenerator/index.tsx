import {
    BreakfastDiningOutlined as BreakfastDiningOutlinedIcon,
    CakeOutlined as CakeOutlinedIcon,
    DinnerDiningOutlined as DinnerDiningOutlinedIcon,
    EggOutlined as EggOutlinedIcon,
    EmojiFoodBeverageOutlined as EmojiFoodBeverageOutlinedIcon,
    IcecreamOutlined as IcecreamOutlinedIcon,
    KebabDiningOutlined as KebabDiningOutlinedIcon,
    LocalPizzaOutlined as LocalPizzaOutlinedIcon,
    LunchDiningOutlined as LunchDiningOutlinedIcon,
    RamenDiningOutlined as RamenDiningOutlinedIcon,
    RiceBowlOutlined as RiceBowlOutlinedIcon,
} from '@mui/icons-material';

export const iconGenerator = (props) => {
    const icons = [
        EmojiFoodBeverageOutlinedIcon,
        LunchDiningOutlinedIcon,
        DinnerDiningOutlinedIcon,
        IcecreamOutlinedIcon,
        KebabDiningOutlinedIcon,
        RiceBowlOutlinedIcon,
        CakeOutlinedIcon,
        EggOutlinedIcon,
        BreakfastDiningOutlinedIcon,
        RamenDiningOutlinedIcon,
        LocalPizzaOutlinedIcon,
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    const RandomIcon = icons[randomIndex];
    return <RandomIcon {...props} />;
};