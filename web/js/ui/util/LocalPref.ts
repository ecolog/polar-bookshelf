import {Optional} from '../../util/ts/Optional';

export class LocalPref {

    public static mark(key: string, value: boolean = true): void {

        if (value) {
            this.set(key, 'true');
        } else {
            this.set(key, 'false');
        }
    }

    /**
     * The initial value is false, After that the value is true.
     */
    public static markOnceRequested(key: string) {

        const result = this.isMarked(key);

        this.mark(key);

        return result;

    }

    public static async markOnceExecuted(key: string,
                                         handler: () => Promise<void>,
                                         otherwise?: () => Promise<void>): Promise<void> {

        const marked = this.isMarked(key);

        if (marked) {

            if (otherwise) {
                await otherwise();
            }

            return;
        }

        await handler();

        this.mark(key);

    }

    public static isMarked(key: string) {

        const currentValue =
            this.get(key).getOrElse('false');

        return currentValue === 'true';

    }

    /**
     * Return true if the given pref is defined.
     */
    public static defined(key: string) {
        return this.get(key).isPresent();
    }

    public static get(key: string): Optional<string> {
        return Optional.of(window.localStorage.getItem(key));
    }

    public static set(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

}
