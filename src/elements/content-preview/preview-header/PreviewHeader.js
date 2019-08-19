/**
 * @flow
 * @file Preview header component
 * @author Box
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import getProp from 'lodash/get';
import AsyncLoad from '../../common/async-load';
import FileInfo from './FileInfo';
import IconClose from '../../../icons/general/IconClose';
import IconDrawAnnotationMode from '../../../icons/annotations/IconDrawAnnotation';
import IconPointAnnotation from '../../../icons/annotations/IconPointAnnotation';
import IconPrint from '../../../icons/general/IconPrint';
import IconDownload from '../../../icons/general/IconDownloadSolid';
import messages from '../../common/messages';
import { bdlGray50 } from '../../../styles/variables';
import PlainButton from '../../../components/plain-button/PlainButton';

import './PreviewHeader.scss';

type Props = {
    canAnnotate: boolean,
    canDownload: boolean,
    contentOpenWithProps?: ContentOpenWithProps,
    file?: BoxItem,
    onClose?: Function,
    onDownload: Function,
    onPrint: Function,
    selectedVersion: ?BoxItemVersion,
    token: ?string,
} & InjectIntlProvidedProps;

const LoadableContentOpenWith = AsyncLoad({
    loader: () => import(/* webpackMode: "lazy", webpackChunkName: "content-open-with" */ '../../content-open-with'),
});

const PreviewHeader = ({
    canAnnotate,
    canDownload,
    contentOpenWithProps = {},
    file,
    intl,
    onClose,
    onDownload,
    onPrint,
    selectedVersion,
    token,
}: Props) => {
    const fileId = file && file.id;
    const shouldRenderOpenWith = fileId && contentOpenWithProps.show;
    const currentVersionId = getProp(file, 'file_version.id');
    const selectedVersionId = getProp(selectedVersion, 'id', currentVersionId);
    const isPreviewingCurrentVersion = currentVersionId === selectedVersionId;

    // When previewing an older version the close button returns the user to the current version
    const closeMsg = isPreviewingCurrentVersion
        ? intl.formatMessage(messages.close)
        : intl.formatMessage(messages.back);
    const printMsg = intl.formatMessage(messages.print);
    const downloadMsg = intl.formatMessage(messages.download);
    const drawMsg = intl.formatMessage(messages.drawAnnotation);
    const pointMsg = intl.formatMessage(messages.pointAnnotation);

    return (
        <header
            className={classNames('bcpr-PreviewHeader', {
                'bcpr-PreviewHeader--basic': !isPreviewingCurrentVersion,
            })}
        >
            <FileInfo file={file} version={selectedVersion} />

            <div className="bcpr-PreviewHeader-controls">
                {isPreviewingCurrentVersion && (
                    <React.Fragment>
                        {shouldRenderOpenWith && (
                            <LoadableContentOpenWith
                                className="bcpr-bcow-btn"
                                fileId={fileId}
                                token={token}
                                {...contentOpenWithProps}
                            />
                        )}
                        {canAnnotate && (
                            <React.Fragment>
                                <PlainButton
                                    aria-label={drawMsg}
                                    className="bcpr-PreviewHeader-button bp-btn-annotate-draw bp-is-hidden"
                                    title={drawMsg}
                                    type="button"
                                >
                                    <IconDrawAnnotationMode color={bdlGray50} height={18} width={18} />
                                </PlainButton>
                                <PlainButton
                                    aria-label={pointMsg}
                                    className="bcpr-PreviewHeader-button bp-btn-annotate-point bp-is-hidden"
                                    title={pointMsg}
                                    type="button"
                                >
                                    <IconPointAnnotation color={bdlGray50} height={18} width={18} />
                                </PlainButton>
                            </React.Fragment>
                        )}
                        {canDownload && (
                            <PlainButton
                                aria-label={printMsg}
                                className="bcpr-PreviewHeader-button"
                                onClick={onPrint}
                                title={printMsg}
                                type="button"
                            >
                                <IconPrint color={bdlGray50} height={22} width={22} />
                            </PlainButton>
                        )}
                        {canDownload && (
                            <PlainButton
                                aria-label={downloadMsg}
                                className="bcpr-PreviewHeader-button"
                                onClick={onDownload}
                                title={downloadMsg}
                                type="button"
                            >
                                <IconDownload color={bdlGray50} height={18} width={18} />
                            </PlainButton>
                        )}
                    </React.Fragment>
                )}

                {onClose && (
                    <PlainButton
                        aria-label={isPreviewingCurrentVersion && closeMsg}
                        className="bcpr-PreviewHeader-button bcpr-PreviewHeader-button-close"
                        onClick={onClose}
                        type="button"
                    >
                        {isPreviewingCurrentVersion ? <IconClose color={bdlGray50} height={24} width={24} /> : closeMsg}
                    </PlainButton>
                )}
            </div>
        </header>
    );
};

export default injectIntl(PreviewHeader);