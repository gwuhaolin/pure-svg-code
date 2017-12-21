/**
 * 把 svg 转化成可以用于 <img/> 标签的 src 熟悉的 url 值
 */
export function svg2url(svgString: string): string;

/**
 * 生成 barcode
 */
export function barcode(data: string,
                        type: 'codabar' | 'code11' | 'code39' | 'code93' | 'code128' | 'ean8' | 'ean13' | 'std25' | 'int25',
                        options?: {
                          /**
                           * (number) -height of svg (default: 30);
                           */
                          barHeight?: number;
                          /**
                           * (number) -width of svg (default: 100);
                           */
                          width?: number;
                          /**
                           * (string) -background color css like (default: 'transparent');
                           */
                          bgColor?: string;
                          /**
                           * (string) -barcode color (default: '#000000');
                           */
                          color?: string;
                          /**
                           * should show text under bar
                           */
                          showHRI?: boolean;
                        }): string;

export function qrcode(options: string | {
  /**
   * QR Code content, required
   */
  content: string;
  /**
   * white space padding, `4` modules by default, `0` for no border
   */
  padding?: number;
  /**
   * QR Code width in pixels
   */
  width?: number;
  /**
   * QR Code height in pixels
   */
  height?: number;
  /**
   * color of modules, color name or hex string, e.g. `#000000`
   */
  color?: string;
  /**
   * color of background, color name or hex string, e.g. `white`
   */
  background?: string;
  /**
   * error correction level: `L`, `M`, `H`, `Q`
   */
  ecl?: 'L' | 'M' | 'H' | 'Q';
}): string;
