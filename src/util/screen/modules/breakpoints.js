const XS_MIN = 480;
const SM_MIN = 768;
const MD_MIN = 992;
const LG_MIN = 1200;
const XL_MIN = 1600;

const SCREEN_MIN = {
    xs: `${XS_MIN}px`,
    sm: `${SM_MIN}px`,
    md: `${MD_MIN}px`,
    lg: `${LG_MIN}px`,
    xl: `${XL_MIN}px`,
};

const SCREEN_MAX = {
    xs: `${SM_MIN - 1}px`,
    sm: `${MD_MIN - 1}px`,
    md: `${LG_MIN - 1}px`,
    lg: `${XL_MIN - 1}px`,
};

export {
    SCREEN_MIN,
    SCREEN_MAX,
};