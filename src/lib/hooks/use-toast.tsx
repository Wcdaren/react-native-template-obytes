import type { InterfaceToastProps } from '@gluestack-ui/core/lib/esm/toast/creator/types';
import React, { createRef, type ReactNode } from 'react';

import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from '@/components/ui/toast';

// Extract action type from Toast component
type ToastAction = React.ComponentProps<typeof Toast>['action'];

export interface ToastOptions
  extends Omit<InterfaceToastProps, 'render' | 'id' | 'containerStyle'> {
  /** Toast title (required unless using render) */
  title?: string;
  /** Toast description (optional) */
  description?: string;
  /** Toast type for styling: success | error | warning | info | muted */
  action?: ToastAction;
  /** Custom render function, when provided title/description/action are ignored */
  render?: (props: { id: string }) => ReactNode;
}

// Global toast ref
const toastRef = createRef<ReturnType<typeof useToast>>();

/**
 * Show a toast
 * @returns toast id, can be used with hideToast(id) to close specific toast
 * @example
 * // Basic usage
 * showToast({ title: 'Success!', action: 'success' });
 *
 * // With description
 * showToast({ title: 'Title', description: 'Details', action: 'info' });
 *
 * // Manual close
 * const id = showToast({ title: 'Loading...', duration: 0 });
 * hideToast(id);
 *
 * // Custom render
 * showToast({
 *   render: ({ id }) => <MyCustomToast id={id} />,
 * });
 */
export const showToast = ({
  title,
  description,
  action = 'muted',
  duration = 3000,
  placement = 'top',
  avoidKeyboard,
  onCloseComplete,
  render,
}: ToastOptions): string | undefined => {
  const toast = toastRef.current;
  if (!toast) {
    console.warn('Toast not initialized. Make sure ToastManager is mounted.');
    return;
  }

  return toast.show({
    duration: duration === 0 ? null : duration,
    placement,
    avoidKeyboard,
    onCloseComplete,
    render: render
      ? render
      : ({ id }) => (
          <Toast nativeID={`toast-${id}`} action={action}>
            <ToastTitle>{title}</ToastTitle>
            {description && <ToastDescription>{description}</ToastDescription>}
          </Toast>
        ),
  });
};

/**
 * Hide toast
 * @param id If provided, closes specific toast; otherwise closes all
 */
export const hideToast = (id?: string) => {
  const toast = toastRef.current;
  if (!toast) return;

  if (id) {
    toast.close(id);
  } else {
    toast.closeAll();
  }
};

/**
 * Check if a specific toast is currently active
 */
export const isToastActive = (id: string): boolean => {
  const toast = toastRef.current;
  return toast?.isActive(id) ?? false;
};

/**
 * Mount in App root component to initialize global toast
 */
export const ToastManager = () => {
  const toast = useToast();

  React.useEffect(() => {
    (toastRef as React.MutableRefObject<typeof toast>).current = toast;
  }, [toast]);

  return null;
};
