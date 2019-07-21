// Generated by dts-bundle v0.7.3



/**
  * Created by AAravindan on 5/7/16.
  */
export class FixedSizeLinkedList extends LinkedList {
    size: number;
    maintainHigh?: boolean;
    maintainLow?: boolean;
    maintainSum?: boolean;
    totalPushed: number;
    periodHigh: number;
    periodLow: number;
    periodSum: number;
    lastShift: number;
    _push: (data: number) => void;
    constructor(size: number, maintainHigh?: boolean, maintainLow?: boolean, maintainSum?: boolean);
    add(data: number): void;
    iterator(): IterableIterator<any>;
    calculatePeriodHigh(): void;
    calculatePeriodLow(): void;
}

export class StockData {
    open: number[];
    high: number[];
    low: number[];
    close: number[];
    reversedInput?: boolean;
    constructor(open: number[], high: number[], low: number[], close: number[], reversedInput: boolean);
}
export class CandleData {
    open?: number;
    high?: number;
    low?: number;
    close?: number;
    timestamp?: number;
    volume?: number;
}
export class CandleList {
    open?: number[];
    high?: number[];
    low?: number[];
    close?: number[];
    volume?: number[];
    timestamp?: number[];
}

export class MAInput extends IndicatorInput {
    period: number;
    values: number[];
    constructor(period: number, values: number[]);
}
export class SMA extends Indicator {
    static calculate: typeof sma;
    period: number;
    price: number[];
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    nextValue(price: number): number | undefined;
}
export function sma(input: MAInput): number[];

export class EMA extends Indicator {
    static calculate: typeof ema;
    period: number;
    price: number[];
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    nextValue(price: number): number;
}
export function ema(input: MAInput): number[];

export class WMA extends Indicator {
    static calculate: typeof wma;
    period: number;
    price: number[];
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    nextValue(price: number): number | undefined;
}
export function wma(input: MAInput): number[];

export class WEMA extends Indicator {
    static calculate: typeof wema;
    period: number | undefined;
    price: number[] | undefined;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    nextValue(price: number): number | undefined;
}
export function wema(input: MAInput): number[];

/**
  * Created by AAravindan on 5/4/16.
  */
export class MACDInput extends IndicatorInput {
    values: number[];
    SimpleMAOscillator: boolean;
    SimpleMASignal: boolean;
    fastPeriod: number;
    slowPeriod: number;
    signalPeriod: number;
    constructor(values: number[]);
}
export class MACDOutput {
    MACD?: number;
    signal?: number;
    histogram?: number;
}
export class MACD extends Indicator {
    static calculate: typeof macd;
    result: MACDOutput[];
    generator: IterableIterator<MACDOutput | undefined>;
    constructor(input: MACDInput);
    nextValue(price: number): MACDOutput | undefined;
}
export function macd(input: MACDInput): MACDOutput[];

/**
  * Created by AAravindan on 5/5/16.
  */
export class RSIInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class RSI extends Indicator {
    static calculate: typeof rsi;
    generator: IterableIterator<number | undefined>;
    constructor(input: RSIInput);
    nextValue(price: number): number | undefined;
}
export function rsi(input: RSIInput): number[];

export class BollingerBandsInput extends IndicatorInput {
    period: number;
    stdDev: number;
    values: number[];
}
export class BollingerBandsOutput extends IndicatorInput {
    middle: number;
    upper: number;
    lower: number;
    pb: number;
}
export class BollingerBands extends Indicator {
    static calculate: typeof bollingerbands;
    generator: IterableIterator<BollingerBandsOutput | undefined>;
    constructor(input: BollingerBandsInput);
    nextValue(price: number): BollingerBandsOutput | undefined;
}
export function bollingerbands(input: BollingerBandsInput): BollingerBandsOutput[];

export class ADXInput extends IndicatorInput {
    high: number[];
    low: number[];
    close: number[];
    period: number;
}
export class ADXOutput extends IndicatorInput {
    adx: number;
    pdi: number;
    mdi: number;
}
export class ADX extends Indicator {
    static calculate: typeof adx;
    result: ADXOutput[];
    generator: IterableIterator<ADXOutput | undefined>;
    constructor(input: ADXInput);
    nextValue(price: number): ADXOutput | undefined;
}
export function adx(input: ADXInput): ADXOutput[];

export class ATRInput extends IndicatorInput {
    low: number[];
    high: number[];
    close: number[];
    period: number;
}
export class ATR extends Indicator {
    static calculate: typeof atr;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: ATRInput);
    nextValue(price: CandleData): number | undefined;
}
export function atr(input: ATRInput): number[];

export class TrueRangeInput extends IndicatorInput {
    low: number[];
    high: number[];
    close: number[];
}
export class TrueRange extends Indicator {
    static calculate: typeof truerange;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: TrueRangeInput);
    nextValue(price: CandleData): number | undefined;
}
export function truerange(input: TrueRangeInput): number[];

export class ROCInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class ROC extends Indicator {
    static calculate: typeof roc;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: ROCInput);
    nextValue(price: number): number | undefined;
}
export function roc(input: ROCInput): number[];

export class KSTInput extends IndicatorInput {
    ROCPer1: number;
    ROCPer2: number;
    ROCPer3: number;
    ROCPer4: number;
    SMAROCPer1: number;
    SMAROCPer2: number;
    SMAROCPer3: number;
    SMAROCPer4: number;
    signalPeriod: number;
    values: number[];
}
export class KSTOutput {
    kst: number;
    signal: number;
}
export class KST extends Indicator {
    static calculate: typeof kst;
    result: KSTOutput[];
    generator: IterableIterator<KSTOutput | undefined>;
    constructor(input: KSTInput);
    nextValue(price: number): KSTOutput;
}
export function kst(input: KSTInput): KSTOutput[];

export class PSARInput extends IndicatorInput {
    step: number;
    max: number;
    high: number[];
    low: number[];
}
export class PSAR extends Indicator {
    static calculate: typeof psar;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: PSARInput);
    nextValue(input: PSARInput): number;
}
export function psar(input: PSARInput): number[];

export class StochasticInput extends IndicatorInput {
    period: number;
    low: number[];
    high: number[];
    close: number[];
    signalPeriod: number;
}
export class StochasticOutput {
    k: number;
    d: number;
}
export class Stochastic extends Indicator {
    static calculate: typeof stochastic;
    result: StochasticOutput[];
    generator: IterableIterator<StochasticOutput | undefined>;
    constructor(input: StochasticInput);
    nextValue(input: StochasticInput): StochasticOutput;
}
export function stochastic(input: StochasticInput): StochasticOutput[];

export class WilliamsRInput extends IndicatorInput {
    low: number[];
    high: number[];
    close: number[];
    period: number;
}
export class WilliamsR extends Indicator {
    static calculate: typeof williamsr;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: WilliamsRInput);
    nextValue(price: number): number | undefined;
}
export function williamsr(input: WilliamsRInput): number[];

/**
  * Created by AAravindan on 5/17/16.
  */
export class ADLInput extends IndicatorInput {
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
}
export class ADL extends Indicator {
    static calculate: typeof adl;
    generator: IterableIterator<number | undefined>;
    constructor(input: ADLInput);
    nextValue(price: CandleData): number | undefined;
}
export function adl(input: ADLInput): number[];

export class OBVInput extends IndicatorInput {
    close: number[];
    volume: number[];
}
export class OBV extends Indicator {
    static calculate: typeof obv;
    generator: IterableIterator<number | undefined>;
    constructor(input: OBVInput);
    nextValue(price: CandleData): number | undefined;
}
export function obv(input: OBVInput): number[];

export class TRIXInput extends IndicatorInput {
    values: number[];
    period: number;
}
export class TRIX extends Indicator {
    static calculate: typeof trix;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: TRIXInput);
    nextValue(price: number): number;
}
export function trix(input: TRIXInput): number[];

export class ForceIndexInput extends IndicatorInput {
    close: number[];
    volume: number[];
    period: number;
}
export class ForceIndex extends Indicator {
    static calculate: typeof forceindex;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: ForceIndexInput);
    nextValue(price: CandleData): number | undefined;
}
export function forceindex(input: ForceIndexInput): number[];

export class CCIInput extends IndicatorInput {
    high: number[];
    low: number[];
    close: number[];
    period: number;
}
export class CCI extends Indicator {
    static calculate: typeof cci;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: CCIInput);
    nextValue(price: CandleData): number | undefined;
}
export function cci(input: CCIInput): number[];

export class AwesomeOscillatorInput extends IndicatorInput {
    high: number[];
    low: number[];
    fastPeriod: number;
    slowPeriod: number;
}
export class AwesomeOscillator extends Indicator {
    static calculate: typeof awesomeoscillator;
    generator: IterableIterator<number | undefined>;
    constructor(input: AwesomeOscillatorInput);
    nextValue(price: CandleData): number | undefined;
}
export function awesomeoscillator(input: AwesomeOscillatorInput): number[];

export class VWAPInput extends IndicatorInput {
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
}
export class VWAP extends Indicator {
    static calculate: typeof vwap;
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: VWAPInput);
    nextValue(price: CandleData): number | undefined;
}
export function vwap(input: VWAPInput): number[];

export class VolumeProfileInput extends IndicatorInput {
    high: number[];
    open: number[];
    low: number[];
    close: number[];
    volume: number[];
    noOfBars: number;
}
export class VolumeProfileOutput {
    rangeStart: number;
    rangeEnd: number;
    bullishVolume: number;
    bearishVolume: number;
}
export function priceFallsBetweenBarRange(low: any, high: any, low1: any, high1: any): boolean;
export class VolumeProfile extends Indicator {
    static calculate: typeof volumeprofile;
    generator: IterableIterator<number | undefined>;
    constructor(input: VolumeProfileInput);
    nextValue(price: CandleData): number | undefined;
}
export function volumeprofile(input: VolumeProfileInput): number[];

export class MFIInput extends IndicatorInput {
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
    period: number;
}
export class MFI extends Indicator {
    static calculate: typeof mfi;
    generator: IterableIterator<number | undefined>;
    constructor(input: MFIInput);
    nextValue(price: CandleData): number | undefined;
}
export function mfi(input: MFIInput): number[];

export class StochasticRsiInput extends IndicatorInput {
    values: number[];
    rsiPeriod: number;
    stochasticPeriod: number;
    kPeriod: number;
    dPeriod: number;
}
export class StochasticRSIOutput {
    stochRSI: number;
    k: number;
    d: number;
}
export class StochasticRSI extends Indicator {
    static calculate: typeof stochasticrsi;
    result: StochasticRSIOutput[];
    generator: IterableIterator<StochasticRSIOutput | undefined>;
    constructor(input: StochasticRsiInput);
    nextValue(input: StochasticRsiInput): StochasticRSIOutput;
}
export function stochasticrsi(input: StochasticRsiInput): StochasticRSIOutput[];

export class AvgGainInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class AverageGain extends Indicator {
    static calculate: typeof averagegain;
    generator: IterableIterator<number | undefined>;
    constructor(input: AvgGainInput);
    nextValue(price: number): number | undefined;
}
export function averagegain(input: AvgGainInput): number[];

export class AvgLossInput extends IndicatorInput {
    values: number[];
    period: number;
}
export class AverageLoss extends Indicator {
    static calculate: typeof averageloss;
    generator: IterableIterator<number | undefined>;
    constructor(input: AvgLossInput);
    nextValue(price: number): number | undefined;
}
export function averageloss(input: AvgLossInput): number[];

export class SDInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class SD extends Indicator {
    static calculate: typeof sd;
    generator: IterableIterator<number | undefined>;
    constructor(input: SDInput);
    nextValue(price: number): number | undefined;
}
export function sd(input: SDInput): number[];

export class HighestInput extends IndicatorInput {
    values: number[];
    period: number;
}
export class Highest extends Indicator {
    static calculate: typeof highest;
    generator: IterableIterator<number | undefined>;
    constructor(input: HighestInput);
    nextValue(price: number): number | undefined;
}
export function highest(input: HighestInput): number[];

export class LowestInput extends IndicatorInput {
    values: number[];
    period: number;
}
export class Lowest extends Indicator {
    static calculate: typeof lowest;
    generator: IterableIterator<number | undefined>;
    constructor(input: LowestInput);
    nextValue(price: number): number | undefined;
}
export function lowest(input: LowestInput): number[];

export class SumInput extends IndicatorInput {
    values: number[];
    period: number;
}
export class Sum extends Indicator {
    static calculate: typeof sum;
    generator: IterableIterator<number | undefined>;
    constructor(input: SumInput);
    nextValue(price: number): number | undefined;
}
export function sum(input: SumInput): number[];

/**
  * Created by AAravindan on 5/4/16.
  */
export class RenkoInput extends IndicatorInput {
    period?: number;
    brickSize?: number;
    useATR?: boolean;
    low?: number[];
    open?: number[];
    volume?: number[];
    high?: number[];
    close?: number[];
    timestamp?: number[];
}
export function renko(input: RenkoInput): CandleList;

/**
  * Created by AAravindan on 5/4/16.
  */
export class HeikinAshiInput extends IndicatorInput {
    low?: number[];
    open?: number[];
    volume?: number[];
    high?: number[];
    close?: number[];
    timestamp?: number[];
}
export class HeikinAshi extends Indicator {
    static calculate: typeof heikinashi;
    result: CandleList;
    generator: IterableIterator<CandleData | undefined>;
    constructor(input: HeikinAshiInput);
    nextValue(price: CandleData): CandleData | undefined;
}
export function heikinashi(input: HeikinAshiInput): CandleList;

export class BullishPatterns extends CandlestickFinder {
    constructor();
    hasPattern(data: StockData): any;
}
export function bullish(data: StockData): any;

export class BearishPatterns extends CandlestickFinder {
    constructor();
    hasPattern(data: StockData): any;
}
export function bearish(data: StockData): any;

export class AbandonedBaby extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function abandonedbaby(data: StockData): any;

export class Doji extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function doji(data: StockData): any;

export class BearishEngulfingPattern extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishengulfingpattern(data: StockData): any;

export class BullishEngulfingPattern extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishengulfingpattern(data: StockData): any;

export class DarkCloudCover extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function darkcloudcover(data: StockData): any;

export class DownsideTasukiGap extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function downsidetasukigap(data: StockData): any;

export class DragonFlyDoji extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function dragonflydoji(data: StockData): any;

export class GraveStoneDoji extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function gravestonedoji(data: StockData): any;

export class BullishHarami extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishharami(data: StockData): any;

export class BearishHarami extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishharami(data: StockData): any;

export class BullishHaramiCross extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishharamicross(data: StockData): any;

export class BearishHaramiCross extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishharamicross(data: StockData): any;

export class EveningDojiStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function eveningdojistar(data: StockData): any;

export class EveningStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function eveningstar(data: StockData): any;

export class MorningDojiStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function morningdojistar(data: StockData): any;

export class MorningStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function morningstar(data: StockData): any;

export class BullishMarubozu extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishmarubozu(data: StockData): any;

export class BearishMarubozu extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishmarubozu(data: StockData): any;

export class PiercingLine extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function piercingline(data: StockData): any;

export class BullishSpinningTop extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishspinningtop(data: StockData): any;

export class BearishSpinningTop extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishspinningtop(data: StockData): any;

export class ThreeBlackCrows extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function threeblackcrows(data: StockData): any;

export class ThreeWhiteSoldiers extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function threewhitesoldiers(data: StockData): any;

export class BullishHammerStick extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishhammerstick(data: StockData): any;

export class BearishHammerStick extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishhammerstick(data: StockData): any;

export class BullishInvertedHammerStick extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishinvertedhammerstick(data: StockData): any;

export class BearishInvertedHammerStick extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishinvertedhammerstick(data: StockData): any;

export class HammerPattern extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
    downwardTrend(data: StockData, confirm?: boolean): boolean;
    includesHammer(data: StockData, confirm?: boolean): any;
    hasConfirmation(data: StockData): boolean;
}
export function hammerpattern(data: StockData): any;

export class HammerPatternUnconfirmed extends HammerPattern {
    constructor();
    logic(data: StockData): boolean;
}
export function hammerpatternunconfirmed(data: StockData): any;

export class HangingMan extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
    upwardTrend(data: StockData, confirm?: boolean): boolean;
    includesHammer(data: StockData, confirm?: boolean): any;
    hasConfirmation(data: StockData): boolean;
}
export function hangingman(data: StockData): any;

export class HangingManUnconfirmed extends HangingMan {
    constructor();
    logic(data: StockData): boolean;
}
export function hangingmanunconfirmed(data: StockData): any;

export class ShootingStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
    upwardTrend(data: StockData, confirm?: boolean): boolean;
    includesHammer(data: StockData, confirm?: boolean): any;
    hasConfirmation(data: StockData): boolean;
}
export function shootingstar(data: StockData): any;

export class ShootingStarUnconfirmed extends ShootingStar {
    constructor();
    logic(data: StockData): boolean;
}
export function shootingstarunconfirmed(data: StockData): any;

export class TweezerTop extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
    upwardTrend(data: StockData): boolean;
}
export function tweezertop(data: StockData): any;

export class TweezerBottom extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
    downwardTrend(data: StockData): boolean;
}
export function tweezerbottom(data: StockData): any;

/**
  * Calcaultes the fibonacci retracements for given start and end points
  *
  * If calculating for up trend start should be low and end should be high and vice versa
  *
  * returns an array of retracements level containing [0 , 23.6, 38.2, 50, 61.8, 78.6, 100, 127.2, 161.8, 261.8, 423.6]
  *
  * @export
  * @param {number} start
  * @param {number} end
  * @returns {number[]}
  */
export function fibonacciretracement(start: number, end: number): number[];

export class IchimokuCloudInput extends IndicatorInput {
    high: number[];
    low: number[];
    conversionPeriod: number;
    basePeriod: number;
    spanPeriod: number;
    displacement: number;
}
export class IchimokuCloudOutput {
    conversion: number;
    base: number;
    spanA: number;
    spanB: number;
}
export class IchimokuCloud extends Indicator {
    static calculate: typeof ichimokucloud;
    result: IchimokuCloudOutput[];
    generator: IterableIterator<IchimokuCloudOutput | undefined>;
    constructor(input: IchimokuCloudInput);
    nextValue(price: CandleData): IchimokuCloudOutput;
}
export function ichimokucloud(input: IchimokuCloudInput): IchimokuCloudOutput[];

export class KeltnerChannelsInput extends IndicatorInput {
    maPeriod: number;
    atrPeriod: number;
    useSMA: boolean;
    multiplier: number;
    high: number[];
    low: number[];
    close: number[];
}
export class KeltnerChannelsOutput extends IndicatorInput {
    middle: number;
    upper: number;
    lower: number;
}
export class KeltnerChannels extends Indicator {
    static calculate: typeof keltnerchannels;
    result: KeltnerChannelsOutput[];
    generator: IterableIterator<KeltnerChannelsOutput | undefined>;
    constructor(input: KeltnerChannelsInput);
    nextValue(price: KeltnerChannelsInput): KeltnerChannelsOutput | undefined;
}
export function keltnerchannels(input: KeltnerChannelsInput): KeltnerChannelsOutput[];

export class ChandelierExitInput extends IndicatorInput {
    period: number;
    multiplier: number;
    high: number[];
    low: number[];
    close: number[];
}
export class ChandelierExitOutput extends IndicatorInput {
    exitLong: number;
    exitShort: number;
}
export class ChandelierExit extends Indicator {
    static calculate: typeof chandelierexit;
    generator: IterableIterator<ChandelierExitOutput | undefined>;
    constructor(input: ChandelierExitInput);
    nextValue(price: ChandelierExitInput): ChandelierExitOutput | undefined;
}
export function chandelierexit(input: ChandelierExitInput): number[];

export function setConfig(key: any, value: any): void;
export function getConfig(key: any): any;

export class LinkedList {
    constructor();
    readonly head: any;
    readonly tail: any;
    readonly current: any;
    readonly length: any;
    push(data: any): void;
    pop(): any;
    shift(): any;
    unshift(data: any): void;
    unshiftCurrent(): any;
    removeCurrent(): any;
    resetCursor(): this;
    next(): any;
}

export class IndicatorInput {
    reversedInput?: boolean;
    format?: (data: number) => number;
}
export class AllInputs {
    values?: number[];
    open?: number[];
    high?: number[];
    low?: number[];
    close?: number[];
    volume?: number[];
    timestamp?: number[];
}
export class Indicator {
    static reverseInputs(input: any): void;
    result: any;
    format: (data: number) => number;
    constructor(input: IndicatorInput);
    getResult(): any;
}

export class CandlestickFinder {
    requiredCount: number;
    name: string;
    constructor();
    approximateEqual(a: number, b: number): boolean;
    logic(data: StockData): boolean;
    getAllPatternIndex(data: StockData): number[];
    hasPattern(data: StockData): any;
    protected _getLastDataForCandleStick(data: StockData): StockData;
    protected _generateDataForCandleStick(data: StockData): StockData[];
}

