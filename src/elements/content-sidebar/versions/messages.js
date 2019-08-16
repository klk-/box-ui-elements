import { defineMessages } from 'react-intl';

const messages = defineMessages({
    versionsEmpty: {
        id: 'be.sidebarVersions.empty',
        description: 'Message to display when no versions are available',
        defaultMessage: 'No prior versions are available for this file.',
    },
    versionsPriorWeek: {
        id: 'be.sidebarVersions.priorWeek',
        description: 'Header to display for group of versions created in the prior week',
        defaultMessage: 'Last Week',
    },
    versionsThisMonth: {
        id: 'be.sidebarVersions.thisMonth',
        description: 'Header to display for group of versions created in the current month',
        defaultMessage: 'This Month',
    },
    versionsToday: {
        id: 'be.sidebarVersions.today',
        description: 'Header to display for group of versions created yesterday',
        defaultMessage: 'Today',
    },
    versionsYesterday: {
        id: 'be.sidebarVersions.yesterday',
        description: 'Header to display for group of versions created today',
        defaultMessage: 'Yesterday',
    },
    versionsTitle: {
        id: 'be.sidebarVersions.title',
        description: 'Title for the preview versions sidebar',
        defaultMessage: 'Version History',
    },
    versionCurrent: {
        id: 'be.sidebarVersions.current',
        defaultMessage: 'Current Version',
        description: 'Label for the current version item in the version history list.',
    },
    versionActionDelete: {
        id: 'be.sidebarVersions.delete',
        defaultMessage: 'Delete',
        description: 'Label for the version delete action.',
    },
    versionActionDeleteError: {
        id: 'be.sidebarVersions.deleteError',
        defaultMessage: 'File version could not be deleted.',
        description: 'Error message for the version delete action.',
    },
    versionActionDownload: {
        id: 'be.sidebarVersions.download',
        defaultMessage: 'Download',
        description: 'Label for the version download action.',
    },
    versionActionDownloadError: {
        id: 'be.sidebarVersions.downloadError',
        defaultMessage: 'File version could not be downloaded.',
        description: 'Error message for the version download action.',
    },
    versionActionPreview: {
        id: 'be.sidebarVersions.preview',
        defaultMessage: 'Preview',
        description: 'Label for the version preview action.',
    },
    versionActionPromote: {
        id: 'be.sidebarVersions.promote',
        defaultMessage: 'Make Current',
        description: 'Label for the version promote action.',
    },
    versionActionPromoteError: {
        id: 'be.sidebarVersions.promoteError',
        defaultMessage: 'File version could not be made current.',
        description: 'Error message for the version promote action.',
    },
    versionActionRestore: {
        id: 'be.sidebarVersions.restore',
        defaultMessage: 'Restore',
        description: 'Label for the version restore action.',
    },
    versionActionRestoreError: {
        id: 'be.sidebarVersions.restoreError',
        defaultMessage: 'File version could not be restored.',
        description: 'Error message for the version restored action.',
    },
    versionActionToggle: {
        id: 'be.sidebarVersions.toggle',
        defaultMessage: 'Toggle Actions Menu',
        description: 'Label for the version actions dropdown menu toggle button.',
    },
    versionDeletedBy: {
        id: 'be.sidebarVersions.deletedBy',
        defaultMessage: 'Deleted by { name }',
        description: 'Message displayed for a deleted version. {name} is the user who performed the action.',
    },
    versionFetchError: {
        id: 'be.sidebarVersions.fetchError',
        defaultMessage: 'File versions could not be retrieved.',
        description: 'Error message for the versions fetch call.',
    },
    versionLimitExceeded: {
        id: 'be.sidebarVersions.versionLimitExceeded',
        defaultMessage:
            'You are limited to the last {versionLimit, number} {versionLimit, plural, one {version} other {versions}}.',
        description: "Text displayed if a version exceeds the user's maximum allowed version count",
    },
    versionNumberBadge: {
        id: 'be.sidebarVersions.versionNumberBadge',
        defaultMessage: 'V{versionNumber}',
        description: 'Text to display in the version badge.',
    },
    versionNumberLabel: {
        id: 'be.sidebarVersions.versionNumberLabel',
        defaultMessage: 'Version number {versionNumber}',
        description: 'Label given to the version badge for screen readers.',
    },
    versionRestoredBy: {
        id: 'be.sidebarVersions.restoredBy',
        defaultMessage: 'Restored by { name }',
        description: 'Message displayed for a restored version. {name} is the user who performed the action.',
    },
    versionServerError: {
        id: 'be.sidebarVersions.serverError',
        defaultMessage: 'Server Error',
        description: 'Heading for inline error messages displayed due to a remote server issue.',
    },
    versionUploadedBy: {
        id: 'be.sidebarVersions.uploadedBy',
        defaultMessage: 'Uploaded by { name }',
        description: 'Message displayed for an uploaded version. {name} is the user who performed the action.',
    },
    versionUserUnknown: {
        id: 'be.sidebarVersions.versionUserUnknown',
        defaultMessage: 'Unknown',
        description: 'Name displayed for unknown or deleted users.',
    },
});

export default messages;
