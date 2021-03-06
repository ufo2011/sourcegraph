import React, { useCallback } from 'react'

interface Props {
    /** The user count input by the user. */
    value: number | null

    /** Called when the user count value changes. */
    onChange: (value: number | null) => void

    disabled?: boolean
    className?: string
}

/**
 * The minimum user count.
 */
const MIN_USER_COUNT = 10

/**
 * Displays a form control for inputting the user count for a product subscription.
 */
export const ProductSubscriptionUserCountFormControl: React.FunctionComponent<Props> = ({
    value,
    onChange,
    disabled,
    className = '',
}) => {
    const onUserCountChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        e => {
            // Check for NaN (which is the value if the user deletes the input's value).
            onChange(Number.isNaN(e.currentTarget.valueAsNumber) ? null : e.currentTarget.valueAsNumber)
        },
        [onChange]
    )

    return (
        <div className={`product-subscription-user-count-control form-group align-items-center ${className}`}>
            <label htmlFor="product-subscription-user-count-control__userCount" className="mb-0 mr-2 font-weight-bold">
                Users
            </label>
            <div className="d-flex align-items-center">
                <input
                    id="product-subscription-user-count-control__userCount"
                    type="number"
                    className="form-control w-auto"
                    min={MIN_USER_COUNT}
                    step={1}
                    max={50000}
                    required={true}
                    disabled={disabled}
                    value={value === null ? '' : Math.max(value, MIN_USER_COUNT)}
                    onChange={onUserCountChange}
                />
            </div>
        </div>
    )
}
