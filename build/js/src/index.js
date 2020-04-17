/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.toofab.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/schemas/gdbots/analytics/tracker/KeenV1';
import '@gdbots/schemas/gdbots/contexts/AppV1';
import '@gdbots/schemas/gdbots/contexts/CloudV1';
import '@gdbots/schemas/gdbots/contexts/UserAgentV1';
import '@gdbots/schemas/gdbots/forms/field/AddressFieldV1';
import '@gdbots/schemas/gdbots/forms/field/AgeFieldV1';
import '@gdbots/schemas/gdbots/forms/field/CountryFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DateFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DobFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DocumentFieldV1';
import '@gdbots/schemas/gdbots/forms/field/EmailFieldV1';
import '@gdbots/schemas/gdbots/forms/field/FacebookUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/GenderFieldV1';
import '@gdbots/schemas/gdbots/forms/field/HeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/InstagramUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LegalFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LongTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/NumberFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhoneFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhotoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PinterestUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SelectFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SexualOrientationFieldV1';
import '@gdbots/schemas/gdbots/forms/field/ShortTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SignatureFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SkypeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SnapchatUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/StatementFieldV1';
import '@gdbots/schemas/gdbots/forms/field/TwitterUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/VideoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WebsiteFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YesNoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeVideoFieldV1';
import '@gdbots/schemas/gdbots/geo/AddressV1';
import '@gdbots/schemas/gdbots/ncr/command/CreateEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/DeleteEdgeV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeCreatedV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeDeletedV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchRequestV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchResponseV1';
import '@gdbots/schemas/gdbots/pbjx/EnvelopeV1';
import '@gdbots/schemas/gdbots/pbjx/command/CheckHealthV1';
import '@gdbots/schemas/gdbots/pbjx/event/EventExecutionFailedV1';
import '@gdbots/schemas/gdbots/pbjx/event/HealthCheckedV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoRequestV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoResponseV1';
import '@gdbots/schemas/gdbots/pbjx/request/RequestFailedResponseV1';
import '@toofab/schemas/toofab/apollo/PollAnswerV1';
import '@toofab/schemas/toofab/apollo/command/CastVoteV1';
import '@toofab/schemas/toofab/apollo/command/CreatePollV1';
import '@toofab/schemas/toofab/apollo/command/DeletePollV1';
import '@toofab/schemas/toofab/apollo/command/ExpirePollV1';
import '@toofab/schemas/toofab/apollo/command/MarkPollAsDraftV1';
import '@toofab/schemas/toofab/apollo/command/MarkPollAsPendingV1';
import '@toofab/schemas/toofab/apollo/command/PublishPollV1';
import '@toofab/schemas/toofab/apollo/command/UnpublishPollV1';
import '@toofab/schemas/toofab/apollo/command/UpdatePollV1';
import '@toofab/schemas/toofab/apollo/event/PollCreatedV1';
import '@toofab/schemas/toofab/apollo/event/PollDeletedV1';
import '@toofab/schemas/toofab/apollo/event/PollExpiredV1';
import '@toofab/schemas/toofab/apollo/event/PollMarkedAsDraftV1';
import '@toofab/schemas/toofab/apollo/event/PollMarkedAsPendingV1';
import '@toofab/schemas/toofab/apollo/event/PollPublishedV1';
import '@toofab/schemas/toofab/apollo/event/PollScheduledV1';
import '@toofab/schemas/toofab/apollo/event/PollUnpublishedV1';
import '@toofab/schemas/toofab/apollo/event/PollUpdatedV1';
import '@toofab/schemas/toofab/apollo/event/VoteCastedV1';
import '@toofab/schemas/toofab/apollo/node/PollV1';
import '@toofab/schemas/toofab/apollo/node/PollStatsV1';
import '@toofab/schemas/toofab/apollo/request/GetPollHistoryRequestV1';
import '@toofab/schemas/toofab/apollo/request/GetPollHistoryResponseV1';
import '@toofab/schemas/toofab/apollo/request/GetPollRequestV1';
import '@toofab/schemas/toofab/apollo/request/GetPollResponseV1';
import '@toofab/schemas/toofab/apollo/request/SearchPollsRequestV1';
import '@toofab/schemas/toofab/apollo/request/SearchPollsResponseV1';
import '@toofab/schemas/toofab/boost/command/CreateSponsorV1';
import '@toofab/schemas/toofab/boost/command/DeleteSponsorV1';
import '@toofab/schemas/toofab/boost/command/ExpireSponsorV1';
import '@toofab/schemas/toofab/boost/command/MarkSponsorAsDraftV1';
import '@toofab/schemas/toofab/boost/command/MarkSponsorAsPendingV1';
import '@toofab/schemas/toofab/boost/command/PublishSponsorV1';
import '@toofab/schemas/toofab/boost/command/RenameSponsorV1';
import '@toofab/schemas/toofab/boost/command/UnpublishSponsorV1';
import '@toofab/schemas/toofab/boost/command/UpdateSponsorV1';
import '@toofab/schemas/toofab/boost/event/SponsorCreatedV1';
import '@toofab/schemas/toofab/boost/event/SponsorDeletedV1';
import '@toofab/schemas/toofab/boost/event/SponsorExpiredV1';
import '@toofab/schemas/toofab/boost/event/SponsorMarkedAsDraftV1';
import '@toofab/schemas/toofab/boost/event/SponsorMarkedAsPendingV1';
import '@toofab/schemas/toofab/boost/event/SponsorPublishedV1';
import '@toofab/schemas/toofab/boost/event/SponsorRenamedV1';
import '@toofab/schemas/toofab/boost/event/SponsorScheduledV1';
import '@toofab/schemas/toofab/boost/event/SponsorUnpublishedV1';
import '@toofab/schemas/toofab/boost/event/SponsorUpdatedV1';
import '@toofab/schemas/toofab/boost/node/SponsorV1';
import '@toofab/schemas/toofab/boost/request/GetSponsorHistoryRequestV1';
import '@toofab/schemas/toofab/boost/request/GetSponsorHistoryResponseV1';
import '@toofab/schemas/toofab/boost/request/GetSponsorRequestV1';
import '@toofab/schemas/toofab/boost/request/GetSponsorResponseV1';
import '@toofab/schemas/toofab/boost/request/SearchSponsorsRequestV1';
import '@toofab/schemas/toofab/boost/request/SearchSponsorsResponseV1';
import '@toofab/schemas/toofab/canvas/block/ArticleBlockV1';
import '@toofab/schemas/toofab/canvas/block/AudioBlockV1';
import '@toofab/schemas/toofab/canvas/block/CodeBlockV1';
import '@toofab/schemas/toofab/canvas/block/DividerBlockV1';
import '@toofab/schemas/toofab/canvas/block/DocumentBlockV1';
import '@toofab/schemas/toofab/canvas/block/FacebookPostBlockV1';
import '@toofab/schemas/toofab/canvas/block/FacebookVideoBlockV1';
import '@toofab/schemas/toofab/canvas/block/GalleryBlockV1';
import '@toofab/schemas/toofab/canvas/block/GoogleMapBlockV1';
import '@toofab/schemas/toofab/canvas/block/HeadingBlockV1';
import '@toofab/schemas/toofab/canvas/block/IframeBlockV1';
import '@toofab/schemas/toofab/canvas/block/ImageBlockV1';
import '@toofab/schemas/toofab/canvas/block/ImgurPostBlockV1';
import '@toofab/schemas/toofab/canvas/block/InstagramMediaBlockV1';
import '@toofab/schemas/toofab/canvas/block/PageBreakBlockV1';
import '@toofab/schemas/toofab/canvas/block/PinterestPinBlockV1';
import '@toofab/schemas/toofab/canvas/block/PollBlockV1';
import '@toofab/schemas/toofab/canvas/block/PollGridBlockV1';
import '@toofab/schemas/toofab/canvas/block/QuoteBlockV1';
import '@toofab/schemas/toofab/canvas/block/SoundcloudAudioBlockV1';
import '@toofab/schemas/toofab/canvas/block/SpotifyEmbedBlockV1';
import '@toofab/schemas/toofab/canvas/block/SpotifyTrackBlockV1';
import '@toofab/schemas/toofab/canvas/block/TextBlockV1';
import '@toofab/schemas/toofab/canvas/block/TiktokEmbedBlockV1';
import '@toofab/schemas/toofab/canvas/block/TumblrPostBlockV1';
import '@toofab/schemas/toofab/canvas/block/TwitterTweetBlockV1';
import '@toofab/schemas/toofab/canvas/block/VideoBlockV1';
import '@toofab/schemas/toofab/canvas/block/VimeoVideoBlockV1';
import '@toofab/schemas/toofab/canvas/block/YoutubePlaylistBlockV1';
import '@toofab/schemas/toofab/canvas/block/YoutubeVideoBlockV1';
import '@toofab/schemas/toofab/canvas/command/CreatePageV1';
import '@toofab/schemas/toofab/canvas/command/DeletePageV1';
import '@toofab/schemas/toofab/canvas/command/ExpirePageV1';
import '@toofab/schemas/toofab/canvas/command/MarkPageAsDraftV1';
import '@toofab/schemas/toofab/canvas/command/MarkPageAsPendingV1';
import '@toofab/schemas/toofab/canvas/command/PublishPageV1';
import '@toofab/schemas/toofab/canvas/command/RenamePageV1';
import '@toofab/schemas/toofab/canvas/command/UnpublishPageV1';
import '@toofab/schemas/toofab/canvas/command/UpdatePageV1';
import '@toofab/schemas/toofab/canvas/event/PageCreatedV1';
import '@toofab/schemas/toofab/canvas/event/PageDeletedV1';
import '@toofab/schemas/toofab/canvas/event/PageExpiredV1';
import '@toofab/schemas/toofab/canvas/event/PageMarkedAsDraftV1';
import '@toofab/schemas/toofab/canvas/event/PageMarkedAsPendingV1';
import '@toofab/schemas/toofab/canvas/event/PagePublishedV1';
import '@toofab/schemas/toofab/canvas/event/PageRenamedV1';
import '@toofab/schemas/toofab/canvas/event/PageScheduledV1';
import '@toofab/schemas/toofab/canvas/event/PageUnpublishedV1';
import '@toofab/schemas/toofab/canvas/event/PageUpdatedV1';
import '@toofab/schemas/toofab/canvas/node/PageV1';
import '@toofab/schemas/toofab/canvas/request/GetPageHistoryRequestV1';
import '@toofab/schemas/toofab/canvas/request/GetPageHistoryResponseV1';
import '@toofab/schemas/toofab/canvas/request/GetPageRequestV1';
import '@toofab/schemas/toofab/canvas/request/GetPageResponseV1';
import '@toofab/schemas/toofab/canvas/request/SearchPagesRequestV1';
import '@toofab/schemas/toofab/canvas/request/SearchPagesResponseV1';
import '@toofab/schemas/toofab/curator/command/CreateGalleryV1';
import '@toofab/schemas/toofab/curator/command/CreatePromotionV1';
import '@toofab/schemas/toofab/curator/command/CreateTeaserV1';
import '@toofab/schemas/toofab/curator/command/CreateTimelineV1';
import '@toofab/schemas/toofab/curator/command/CreateWidgetV1';
import '@toofab/schemas/toofab/curator/command/DeleteGalleryV1';
import '@toofab/schemas/toofab/curator/command/DeletePromotionV1';
import '@toofab/schemas/toofab/curator/command/DeleteTeaserV1';
import '@toofab/schemas/toofab/curator/command/DeleteTimelineV1';
import '@toofab/schemas/toofab/curator/command/DeleteWidgetV1';
import '@toofab/schemas/toofab/curator/command/ExpireGalleryV1';
import '@toofab/schemas/toofab/curator/command/ExpirePromotionV1';
import '@toofab/schemas/toofab/curator/command/ExpireTeaserV1';
import '@toofab/schemas/toofab/curator/command/ExpireTimelineV1';
import '@toofab/schemas/toofab/curator/command/MarkGalleryAsDraftV1';
import '@toofab/schemas/toofab/curator/command/MarkGalleryAsPendingV1';
import '@toofab/schemas/toofab/curator/command/MarkPromotionAsDraftV1';
import '@toofab/schemas/toofab/curator/command/MarkPromotionAsPendingV1';
import '@toofab/schemas/toofab/curator/command/MarkTeaserAsDraftV1';
import '@toofab/schemas/toofab/curator/command/MarkTeaserAsPendingV1';
import '@toofab/schemas/toofab/curator/command/MarkTimelineAsDraftV1';
import '@toofab/schemas/toofab/curator/command/MarkTimelineAsPendingV1';
import '@toofab/schemas/toofab/curator/command/PublishGalleryV1';
import '@toofab/schemas/toofab/curator/command/PublishPromotionV1';
import '@toofab/schemas/toofab/curator/command/PublishTeaserV1';
import '@toofab/schemas/toofab/curator/command/PublishTimelineV1';
import '@toofab/schemas/toofab/curator/command/RemoveTeaserSlottingV1';
import '@toofab/schemas/toofab/curator/command/RenameGalleryV1';
import '@toofab/schemas/toofab/curator/command/RenameTimelineV1';
import '@toofab/schemas/toofab/curator/command/SyncTeaserV1';
import '@toofab/schemas/toofab/curator/command/UnpublishGalleryV1';
import '@toofab/schemas/toofab/curator/command/UnpublishPromotionV1';
import '@toofab/schemas/toofab/curator/command/UnpublishTeaserV1';
import '@toofab/schemas/toofab/curator/command/UnpublishTimelineV1';
import '@toofab/schemas/toofab/curator/command/UpdateGalleryV1';
import '@toofab/schemas/toofab/curator/command/UpdateGalleryImageCountV1';
import '@toofab/schemas/toofab/curator/command/UpdatePromotionV1';
import '@toofab/schemas/toofab/curator/command/UpdateTeaserV1';
import '@toofab/schemas/toofab/curator/command/UpdateTimelineV1';
import '@toofab/schemas/toofab/curator/command/UpdateWidgetV1';
import '@toofab/schemas/toofab/curator/event/GalleryCreatedV1';
import '@toofab/schemas/toofab/curator/event/GalleryDeletedV1';
import '@toofab/schemas/toofab/curator/event/GalleryExpiredV1';
import '@toofab/schemas/toofab/curator/event/GalleryImageCountUpdatedV1';
import '@toofab/schemas/toofab/curator/event/GalleryMarkedAsDraftV1';
import '@toofab/schemas/toofab/curator/event/GalleryMarkedAsPendingV1';
import '@toofab/schemas/toofab/curator/event/GalleryPublishedV1';
import '@toofab/schemas/toofab/curator/event/GalleryRenamedV1';
import '@toofab/schemas/toofab/curator/event/GalleryScheduledV1';
import '@toofab/schemas/toofab/curator/event/GalleryUnpublishedV1';
import '@toofab/schemas/toofab/curator/event/GalleryUpdatedV1';
import '@toofab/schemas/toofab/curator/event/PromotionCreatedV1';
import '@toofab/schemas/toofab/curator/event/PromotionDeletedV1';
import '@toofab/schemas/toofab/curator/event/PromotionExpiredV1';
import '@toofab/schemas/toofab/curator/event/PromotionMarkedAsDraftV1';
import '@toofab/schemas/toofab/curator/event/PromotionMarkedAsPendingV1';
import '@toofab/schemas/toofab/curator/event/PromotionPublishedV1';
import '@toofab/schemas/toofab/curator/event/PromotionScheduledV1';
import '@toofab/schemas/toofab/curator/event/PromotionUnpublishedV1';
import '@toofab/schemas/toofab/curator/event/PromotionUpdatedV1';
import '@toofab/schemas/toofab/curator/event/TeaserCreatedV1';
import '@toofab/schemas/toofab/curator/event/TeaserDeletedV1';
import '@toofab/schemas/toofab/curator/event/TeaserExpiredV1';
import '@toofab/schemas/toofab/curator/event/TeaserMarkedAsDraftV1';
import '@toofab/schemas/toofab/curator/event/TeaserMarkedAsPendingV1';
import '@toofab/schemas/toofab/curator/event/TeaserPublishedV1';
import '@toofab/schemas/toofab/curator/event/TeaserScheduledV1';
import '@toofab/schemas/toofab/curator/event/TeaserSlottingRemovedV1';
import '@toofab/schemas/toofab/curator/event/TeaserUnpublishedV1';
import '@toofab/schemas/toofab/curator/event/TeaserUpdatedV1';
import '@toofab/schemas/toofab/curator/event/TimelineCreatedV1';
import '@toofab/schemas/toofab/curator/event/TimelineDeletedV1';
import '@toofab/schemas/toofab/curator/event/TimelineExpiredV1';
import '@toofab/schemas/toofab/curator/event/TimelineMarkedAsDraftV1';
import '@toofab/schemas/toofab/curator/event/TimelineMarkedAsPendingV1';
import '@toofab/schemas/toofab/curator/event/TimelinePublishedV1';
import '@toofab/schemas/toofab/curator/event/TimelineRenamedV1';
import '@toofab/schemas/toofab/curator/event/TimelineScheduledV1';
import '@toofab/schemas/toofab/curator/event/TimelineUnpublishedV1';
import '@toofab/schemas/toofab/curator/event/TimelineUpdatedV1';
import '@toofab/schemas/toofab/curator/event/WidgetCreatedV1';
import '@toofab/schemas/toofab/curator/event/WidgetDeletedV1';
import '@toofab/schemas/toofab/curator/event/WidgetUpdatedV1';
import '@toofab/schemas/toofab/curator/node/AdWidgetV1';
import '@toofab/schemas/toofab/curator/node/AlertWidgetV1';
import '@toofab/schemas/toofab/curator/node/ArticleTeaserV1';
import '@toofab/schemas/toofab/curator/node/AssetTeaserV1';
import '@toofab/schemas/toofab/curator/node/BlogrollWidgetV1';
import '@toofab/schemas/toofab/curator/node/CarouselWidgetV1';
import '@toofab/schemas/toofab/curator/node/CategoryTeaserV1';
import '@toofab/schemas/toofab/curator/node/ChannelTeaserV1';
import '@toofab/schemas/toofab/curator/node/CodeWidgetV1';
import '@toofab/schemas/toofab/curator/node/GalleryV1';
import '@toofab/schemas/toofab/curator/node/GalleryTeaserV1';
import '@toofab/schemas/toofab/curator/node/GalleryWidgetV1';
import '@toofab/schemas/toofab/curator/node/GridlerWidgetV1';
import '@toofab/schemas/toofab/curator/node/HeroBarWidgetV1';
import '@toofab/schemas/toofab/curator/node/LinkTeaserV1';
import '@toofab/schemas/toofab/curator/node/MediaListWidgetV1';
import '@toofab/schemas/toofab/curator/node/PageTeaserV1';
import '@toofab/schemas/toofab/curator/node/PersonTeaserV1';
import '@toofab/schemas/toofab/curator/node/PlaylistWidgetV1';
import '@toofab/schemas/toofab/curator/node/PollTeaserV1';
import '@toofab/schemas/toofab/curator/node/PromotionV1';
import '@toofab/schemas/toofab/curator/node/ShowtimesWidgetV1';
import '@toofab/schemas/toofab/curator/node/SliderWidgetV1';
import '@toofab/schemas/toofab/curator/node/SpotlightWidgetV1';
import '@toofab/schemas/toofab/curator/node/TagCloudWidgetV1';
import '@toofab/schemas/toofab/curator/node/TetrisWidgetV1';
import '@toofab/schemas/toofab/curator/node/TimelineV1';
import '@toofab/schemas/toofab/curator/node/TimelineTeaserV1';
import '@toofab/schemas/toofab/curator/node/VideoTeaserV1';
import '@toofab/schemas/toofab/curator/node/YoutubeVideoTeaserV1';
import '@toofab/schemas/toofab/curator/request/GetGalleryHistoryRequestV1';
import '@toofab/schemas/toofab/curator/request/GetGalleryHistoryResponseV1';
import '@toofab/schemas/toofab/curator/request/GetGalleryRequestV1';
import '@toofab/schemas/toofab/curator/request/GetGalleryResponseV1';
import '@toofab/schemas/toofab/curator/request/GetPromotionHistoryRequestV1';
import '@toofab/schemas/toofab/curator/request/GetPromotionHistoryResponseV1';
import '@toofab/schemas/toofab/curator/request/GetPromotionRequestV1';
import '@toofab/schemas/toofab/curator/request/GetPromotionResponseV1';
import '@toofab/schemas/toofab/curator/request/GetTeaserHistoryRequestV1';
import '@toofab/schemas/toofab/curator/request/GetTeaserHistoryResponseV1';
import '@toofab/schemas/toofab/curator/request/GetTeaserRequestV1';
import '@toofab/schemas/toofab/curator/request/GetTeaserResponseV1';
import '@toofab/schemas/toofab/curator/request/GetTimelineHistoryRequestV1';
import '@toofab/schemas/toofab/curator/request/GetTimelineHistoryResponseV1';
import '@toofab/schemas/toofab/curator/request/GetTimelineRequestV1';
import '@toofab/schemas/toofab/curator/request/GetTimelineResponseV1';
import '@toofab/schemas/toofab/curator/request/GetWidgetHistoryRequestV1';
import '@toofab/schemas/toofab/curator/request/GetWidgetHistoryResponseV1';
import '@toofab/schemas/toofab/curator/request/GetWidgetRequestV1';
import '@toofab/schemas/toofab/curator/request/GetWidgetResponseV1';
import '@toofab/schemas/toofab/curator/request/RenderPromotionRequestV1';
import '@toofab/schemas/toofab/curator/request/RenderPromotionResponseV1';
import '@toofab/schemas/toofab/curator/request/RenderWidgetRequestV1';
import '@toofab/schemas/toofab/curator/request/RenderWidgetResponseV1';
import '@toofab/schemas/toofab/curator/request/SearchGalleriesRequestV1';
import '@toofab/schemas/toofab/curator/request/SearchGalleriesResponseV1';
import '@toofab/schemas/toofab/curator/request/SearchPromotionsRequestV1';
import '@toofab/schemas/toofab/curator/request/SearchPromotionsResponseV1';
import '@toofab/schemas/toofab/curator/request/SearchTeasersRequestV1';
import '@toofab/schemas/toofab/curator/request/SearchTeasersResponseV1';
import '@toofab/schemas/toofab/curator/request/SearchTimelinesRequestV1';
import '@toofab/schemas/toofab/curator/request/SearchTimelinesResponseV1';
import '@toofab/schemas/toofab/curator/request/SearchWidgetsRequestV1';
import '@toofab/schemas/toofab/curator/request/SearchWidgetsResponseV1';
import '@toofab/schemas/toofab/dam/command/CreateAssetV1';
import '@toofab/schemas/toofab/dam/command/DeleteAssetV1';
import '@toofab/schemas/toofab/dam/command/ExpireAssetV1';
import '@toofab/schemas/toofab/dam/command/LinkAssetsV1';
import '@toofab/schemas/toofab/dam/command/PatchAssetsV1';
import '@toofab/schemas/toofab/dam/command/ReorderGalleryAssetsV1';
import '@toofab/schemas/toofab/dam/command/UnlinkAssetsV1';
import '@toofab/schemas/toofab/dam/command/UpdateAssetV1';
import '@toofab/schemas/toofab/dam/event/AssetCreatedV1';
import '@toofab/schemas/toofab/dam/event/AssetDeletedV1';
import '@toofab/schemas/toofab/dam/event/AssetExpiredV1';
import '@toofab/schemas/toofab/dam/event/AssetLinkedV1';
import '@toofab/schemas/toofab/dam/event/AssetPatchedV1';
import '@toofab/schemas/toofab/dam/event/AssetUnlinkedV1';
import '@toofab/schemas/toofab/dam/event/AssetUpdatedV1';
import '@toofab/schemas/toofab/dam/event/GalleryAssetReorderedV1';
import '@toofab/schemas/toofab/dam/node/ArchiveAssetV1';
import '@toofab/schemas/toofab/dam/node/AudioAssetV1';
import '@toofab/schemas/toofab/dam/node/CodeAssetV1';
import '@toofab/schemas/toofab/dam/node/DocumentAssetV1';
import '@toofab/schemas/toofab/dam/node/ImageAssetV1';
import '@toofab/schemas/toofab/dam/node/UnknownAssetV1';
import '@toofab/schemas/toofab/dam/node/VideoAssetV1';
import '@toofab/schemas/toofab/dam/request/GetAssetHistoryRequestV1';
import '@toofab/schemas/toofab/dam/request/GetAssetHistoryResponseV1';
import '@toofab/schemas/toofab/dam/request/GetAssetRequestV1';
import '@toofab/schemas/toofab/dam/request/GetAssetResponseV1';
import '@toofab/schemas/toofab/dam/request/GetUploadUrlsRequestV1';
import '@toofab/schemas/toofab/dam/request/GetUploadUrlsResponseV1';
import '@toofab/schemas/toofab/dam/request/SearchAssetsRequestV1';
import '@toofab/schemas/toofab/dam/request/SearchAssetsResponseV1';
import '@toofab/schemas/toofab/iam/command/CreateAppV1';
import '@toofab/schemas/toofab/iam/command/CreateRoleV1';
import '@toofab/schemas/toofab/iam/command/CreateUserV1';
import '@toofab/schemas/toofab/iam/command/DeleteAppV1';
import '@toofab/schemas/toofab/iam/command/DeleteRoleV1';
import '@toofab/schemas/toofab/iam/command/DeleteUserV1';
import '@toofab/schemas/toofab/iam/command/GrantRolesToAppV1';
import '@toofab/schemas/toofab/iam/command/GrantRolesToUserV1';
import '@toofab/schemas/toofab/iam/command/RevokeRolesFromAppV1';
import '@toofab/schemas/toofab/iam/command/RevokeRolesFromUserV1';
import '@toofab/schemas/toofab/iam/command/UpdateAppV1';
import '@toofab/schemas/toofab/iam/command/UpdateRoleV1';
import '@toofab/schemas/toofab/iam/command/UpdateUserV1';
import '@toofab/schemas/toofab/iam/event/AppCreatedV1';
import '@toofab/schemas/toofab/iam/event/AppDeletedV1';
import '@toofab/schemas/toofab/iam/event/AppRolesGrantedV1';
import '@toofab/schemas/toofab/iam/event/AppRolesRevokedV1';
import '@toofab/schemas/toofab/iam/event/AppUpdatedV1';
import '@toofab/schemas/toofab/iam/event/RoleCreatedV1';
import '@toofab/schemas/toofab/iam/event/RoleDeletedV1';
import '@toofab/schemas/toofab/iam/event/RoleUpdatedV1';
import '@toofab/schemas/toofab/iam/event/UserCreatedV1';
import '@toofab/schemas/toofab/iam/event/UserDeletedV1';
import '@toofab/schemas/toofab/iam/event/UserRolesGrantedV1';
import '@toofab/schemas/toofab/iam/event/UserRolesRevokedV1';
import '@toofab/schemas/toofab/iam/event/UserUpdatedV1';
import '@toofab/schemas/toofab/iam/node/AlexaAppV1';
import '@toofab/schemas/toofab/iam/node/AndroidAppV1';
import '@toofab/schemas/toofab/iam/node/AppleNewsAppV1';
import '@toofab/schemas/toofab/iam/node/BrowserAppV1';
import '@toofab/schemas/toofab/iam/node/EmailAppV1';
import '@toofab/schemas/toofab/iam/node/IosAppV1';
import '@toofab/schemas/toofab/iam/node/RoleV1';
import '@toofab/schemas/toofab/iam/node/SlackAppV1';
import '@toofab/schemas/toofab/iam/node/SmsAppV1';
import '@toofab/schemas/toofab/iam/node/UserV1';
import '@toofab/schemas/toofab/iam/request/GetAllAppsRequestV1';
import '@toofab/schemas/toofab/iam/request/GetAllAppsResponseV1';
import '@toofab/schemas/toofab/iam/request/GetAppHistoryRequestV1';
import '@toofab/schemas/toofab/iam/request/GetAppHistoryResponseV1';
import '@toofab/schemas/toofab/iam/request/GetAppRequestV1';
import '@toofab/schemas/toofab/iam/request/GetAppResponseV1';
import '@toofab/schemas/toofab/iam/request/GetRoleHistoryRequestV1';
import '@toofab/schemas/toofab/iam/request/GetRoleHistoryResponseV1';
import '@toofab/schemas/toofab/iam/request/GetRoleRequestV1';
import '@toofab/schemas/toofab/iam/request/GetRoleResponseV1';
import '@toofab/schemas/toofab/iam/request/GetUserHistoryRequestV1';
import '@toofab/schemas/toofab/iam/request/GetUserHistoryResponseV1';
import '@toofab/schemas/toofab/iam/request/GetUserRequestV1';
import '@toofab/schemas/toofab/iam/request/GetUserResponseV1';
import '@toofab/schemas/toofab/iam/request/ListAllRolesRequestV1';
import '@toofab/schemas/toofab/iam/request/ListAllRolesResponseV1';
import '@toofab/schemas/toofab/iam/request/SearchUsersRequestV1';
import '@toofab/schemas/toofab/iam/request/SearchUsersResponseV1';
import '@toofab/schemas/toofab/news/command/CollectArticleStatsV1';
import '@toofab/schemas/toofab/news/command/CreateArticleV1';
import '@toofab/schemas/toofab/news/command/DeleteArticleV1';
import '@toofab/schemas/toofab/news/command/ExpireArticleV1';
import '@toofab/schemas/toofab/news/command/LockArticleV1';
import '@toofab/schemas/toofab/news/command/MarkArticleAsDraftV1';
import '@toofab/schemas/toofab/news/command/MarkArticleAsPendingV1';
import '@toofab/schemas/toofab/news/command/PublishArticleV1';
import '@toofab/schemas/toofab/news/command/RemoveArticleSlottingV1';
import '@toofab/schemas/toofab/news/command/RenameArticleV1';
import '@toofab/schemas/toofab/news/command/UnlockArticleV1';
import '@toofab/schemas/toofab/news/command/UnpublishArticleV1';
import '@toofab/schemas/toofab/news/command/UpdateArticleV1';
import '@toofab/schemas/toofab/news/event/AppleNewsArticleSyncedV1';
import '@toofab/schemas/toofab/news/event/ArticleCreatedV1';
import '@toofab/schemas/toofab/news/event/ArticleDeletedV1';
import '@toofab/schemas/toofab/news/event/ArticleExpiredV1';
import '@toofab/schemas/toofab/news/event/ArticleLockedV1';
import '@toofab/schemas/toofab/news/event/ArticleMarkedAsDraftV1';
import '@toofab/schemas/toofab/news/event/ArticleMarkedAsPendingV1';
import '@toofab/schemas/toofab/news/event/ArticlePublishedV1';
import '@toofab/schemas/toofab/news/event/ArticleRenamedV1';
import '@toofab/schemas/toofab/news/event/ArticleScheduledV1';
import '@toofab/schemas/toofab/news/event/ArticleSlottingRemovedV1';
import '@toofab/schemas/toofab/news/event/ArticleStatsCollectedV1';
import '@toofab/schemas/toofab/news/event/ArticleUnlockedV1';
import '@toofab/schemas/toofab/news/event/ArticleUnpublishedV1';
import '@toofab/schemas/toofab/news/event/ArticleUpdatedV1';
import '@toofab/schemas/toofab/news/node/ArticleV1';
import '@toofab/schemas/toofab/news/node/ArticleStatsV1';
import '@toofab/schemas/toofab/news/request/GetArticleHistoryRequestV1';
import '@toofab/schemas/toofab/news/request/GetArticleHistoryResponseV1';
import '@toofab/schemas/toofab/news/request/GetArticleRequestV1';
import '@toofab/schemas/toofab/news/request/GetArticleResponseV1';
import '@toofab/schemas/toofab/news/request/SearchArticlesRequestV1';
import '@toofab/schemas/toofab/news/request/SearchArticlesResponseV1';
import '@toofab/schemas/toofab/notify/command/CreateNotificationV1';
import '@toofab/schemas/toofab/notify/command/DeleteNotificationV1';
import '@toofab/schemas/toofab/notify/command/SendNotificationV1';
import '@toofab/schemas/toofab/notify/command/UpdateNotificationV1';
import '@toofab/schemas/toofab/notify/event/NotificationCreatedV1';
import '@toofab/schemas/toofab/notify/event/NotificationDeletedV1';
import '@toofab/schemas/toofab/notify/event/NotificationFailedV1';
import '@toofab/schemas/toofab/notify/event/NotificationSentV1';
import '@toofab/schemas/toofab/notify/event/NotificationUpdatedV1';
import '@toofab/schemas/toofab/notify/node/AlexaNotificationV1';
import '@toofab/schemas/toofab/notify/node/AndroidNotificationV1';
import '@toofab/schemas/toofab/notify/node/AppleNewsNotificationV1';
import '@toofab/schemas/toofab/notify/node/BrowserNotificationV1';
import '@toofab/schemas/toofab/notify/node/EmailNotificationV1';
import '@toofab/schemas/toofab/notify/node/IosNotificationV1';
import '@toofab/schemas/toofab/notify/node/SlackNotificationV1';
import '@toofab/schemas/toofab/notify/node/SmsNotificationV1';
import '@toofab/schemas/toofab/notify/request/GetNotificationHistoryRequestV1';
import '@toofab/schemas/toofab/notify/request/GetNotificationHistoryResponseV1';
import '@toofab/schemas/toofab/notify/request/GetNotificationRequestV1';
import '@toofab/schemas/toofab/notify/request/GetNotificationResponseV1';
import '@toofab/schemas/toofab/notify/request/SearchNotificationsRequestV1';
import '@toofab/schemas/toofab/notify/request/SearchNotificationsResponseV1';
import '@toofab/schemas/toofab/ovp/command/CreateVideoV1';
import '@toofab/schemas/toofab/ovp/command/DeleteVideoV1';
import '@toofab/schemas/toofab/ovp/command/ExpireVideoV1';
import '@toofab/schemas/toofab/ovp/command/MarkVideoAsDraftV1';
import '@toofab/schemas/toofab/ovp/command/MarkVideoAsPendingV1';
import '@toofab/schemas/toofab/ovp/command/PublishVideoV1';
import '@toofab/schemas/toofab/ovp/command/RenameVideoV1';
import '@toofab/schemas/toofab/ovp/command/UnpublishVideoV1';
import '@toofab/schemas/toofab/ovp/command/UpdateVideoV1';
import '@toofab/schemas/toofab/ovp/event/VideoCreatedV1';
import '@toofab/schemas/toofab/ovp/event/VideoDeletedV1';
import '@toofab/schemas/toofab/ovp/event/VideoExpiredV1';
import '@toofab/schemas/toofab/ovp/event/VideoMarkedAsDraftV1';
import '@toofab/schemas/toofab/ovp/event/VideoMarkedAsPendingV1';
import '@toofab/schemas/toofab/ovp/event/VideoPublishedV1';
import '@toofab/schemas/toofab/ovp/event/VideoRenamedV1';
import '@toofab/schemas/toofab/ovp/event/VideoScheduledV1';
import '@toofab/schemas/toofab/ovp/event/VideoUnpublishedV1';
import '@toofab/schemas/toofab/ovp/event/VideoUpdatedV1';
import '@toofab/schemas/toofab/ovp/node/VideoV1';
import '@toofab/schemas/toofab/ovp/request/GetVideoHistoryRequestV1';
import '@toofab/schemas/toofab/ovp/request/GetVideoHistoryResponseV1';
import '@toofab/schemas/toofab/ovp/request/GetVideoRequestV1';
import '@toofab/schemas/toofab/ovp/request/GetVideoResponseV1';
import '@toofab/schemas/toofab/ovp/request/SearchVideosRequestV1';
import '@toofab/schemas/toofab/ovp/request/SearchVideosResponseV1';
import '@toofab/schemas/toofab/people/command/CreatePersonV1';
import '@toofab/schemas/toofab/people/command/DeletePersonV1';
import '@toofab/schemas/toofab/people/command/RenamePersonV1';
import '@toofab/schemas/toofab/people/command/UpdatePersonV1';
import '@toofab/schemas/toofab/people/event/PersonCreatedV1';
import '@toofab/schemas/toofab/people/event/PersonDeletedV1';
import '@toofab/schemas/toofab/people/event/PersonRenamedV1';
import '@toofab/schemas/toofab/people/event/PersonUpdatedV1';
import '@toofab/schemas/toofab/people/node/PersonV1';
import '@toofab/schemas/toofab/people/request/GetPersonHistoryRequestV1';
import '@toofab/schemas/toofab/people/request/GetPersonHistoryResponseV1';
import '@toofab/schemas/toofab/people/request/GetPersonRequestV1';
import '@toofab/schemas/toofab/people/request/GetPersonResponseV1';
import '@toofab/schemas/toofab/people/request/SearchPeopleRequestV1';
import '@toofab/schemas/toofab/people/request/SearchPeopleResponseV1';
import '@toofab/schemas/toofab/sys/command/CreateFlagsetV1';
import '@toofab/schemas/toofab/sys/command/CreatePicklistV1';
import '@toofab/schemas/toofab/sys/command/CreateRedirectV1';
import '@toofab/schemas/toofab/sys/command/DeleteFlagsetV1';
import '@toofab/schemas/toofab/sys/command/DeletePicklistV1';
import '@toofab/schemas/toofab/sys/command/DeleteRedirectV1';
import '@toofab/schemas/toofab/sys/command/UpdateFlagsetV1';
import '@toofab/schemas/toofab/sys/command/UpdatePicklistV1';
import '@toofab/schemas/toofab/sys/command/UpdateRedirectV1';
import '@toofab/schemas/toofab/sys/event/FlagsetCreatedV1';
import '@toofab/schemas/toofab/sys/event/FlagsetDeletedV1';
import '@toofab/schemas/toofab/sys/event/FlagsetUpdatedV1';
import '@toofab/schemas/toofab/sys/event/PicklistCreatedV1';
import '@toofab/schemas/toofab/sys/event/PicklistDeletedV1';
import '@toofab/schemas/toofab/sys/event/PicklistUpdatedV1';
import '@toofab/schemas/toofab/sys/event/RedirectCreatedV1';
import '@toofab/schemas/toofab/sys/event/RedirectDeletedV1';
import '@toofab/schemas/toofab/sys/event/RedirectUpdatedV1';
import '@toofab/schemas/toofab/sys/node/FlagsetV1';
import '@toofab/schemas/toofab/sys/node/PicklistV1';
import '@toofab/schemas/toofab/sys/node/RedirectV1';
import '@toofab/schemas/toofab/sys/request/GetFlagsetHistoryRequestV1';
import '@toofab/schemas/toofab/sys/request/GetFlagsetHistoryResponseV1';
import '@toofab/schemas/toofab/sys/request/GetFlagsetRequestV1';
import '@toofab/schemas/toofab/sys/request/GetFlagsetResponseV1';
import '@toofab/schemas/toofab/sys/request/GetPicklistHistoryRequestV1';
import '@toofab/schemas/toofab/sys/request/GetPicklistHistoryResponseV1';
import '@toofab/schemas/toofab/sys/request/GetPicklistRequestV1';
import '@toofab/schemas/toofab/sys/request/GetPicklistResponseV1';
import '@toofab/schemas/toofab/sys/request/GetRedirectHistoryRequestV1';
import '@toofab/schemas/toofab/sys/request/GetRedirectHistoryResponseV1';
import '@toofab/schemas/toofab/sys/request/GetRedirectRequestV1';
import '@toofab/schemas/toofab/sys/request/GetRedirectResponseV1';
import '@toofab/schemas/toofab/sys/request/ListAllFlagsetsRequestV1';
import '@toofab/schemas/toofab/sys/request/ListAllFlagsetsResponseV1';
import '@toofab/schemas/toofab/sys/request/ListAllPicklistsRequestV1';
import '@toofab/schemas/toofab/sys/request/ListAllPicklistsResponseV1';
import '@toofab/schemas/toofab/sys/request/SearchRedirectsRequestV1';
import '@toofab/schemas/toofab/sys/request/SearchRedirectsResponseV1';
import '@toofab/schemas/toofab/taxonomy/command/CreateCategoryV1';
import '@toofab/schemas/toofab/taxonomy/command/CreateChannelV1';
import '@toofab/schemas/toofab/taxonomy/command/DeleteCategoryV1';
import '@toofab/schemas/toofab/taxonomy/command/DeleteChannelV1';
import '@toofab/schemas/toofab/taxonomy/command/RenameCategoryV1';
import '@toofab/schemas/toofab/taxonomy/command/RenameChannelV1';
import '@toofab/schemas/toofab/taxonomy/command/UpdateCategoryV1';
import '@toofab/schemas/toofab/taxonomy/command/UpdateChannelV1';
import '@toofab/schemas/toofab/taxonomy/event/CategoryCreatedV1';
import '@toofab/schemas/toofab/taxonomy/event/CategoryDeletedV1';
import '@toofab/schemas/toofab/taxonomy/event/CategoryRenamedV1';
import '@toofab/schemas/toofab/taxonomy/event/CategoryUpdatedV1';
import '@toofab/schemas/toofab/taxonomy/event/ChannelCreatedV1';
import '@toofab/schemas/toofab/taxonomy/event/ChannelDeletedV1';
import '@toofab/schemas/toofab/taxonomy/event/ChannelRenamedV1';
import '@toofab/schemas/toofab/taxonomy/event/ChannelUpdatedV1';
import '@toofab/schemas/toofab/taxonomy/node/CategoryV1';
import '@toofab/schemas/toofab/taxonomy/node/ChannelV1';
import '@toofab/schemas/toofab/taxonomy/request/GetAllChannelsRequestV1';
import '@toofab/schemas/toofab/taxonomy/request/GetAllChannelsResponseV1';
import '@toofab/schemas/toofab/taxonomy/request/GetCategoryHistoryRequestV1';
import '@toofab/schemas/toofab/taxonomy/request/GetCategoryHistoryResponseV1';
import '@toofab/schemas/toofab/taxonomy/request/GetCategoryRequestV1';
import '@toofab/schemas/toofab/taxonomy/request/GetCategoryResponseV1';
import '@toofab/schemas/toofab/taxonomy/request/GetChannelHistoryRequestV1';
import '@toofab/schemas/toofab/taxonomy/request/GetChannelHistoryResponseV1';
import '@toofab/schemas/toofab/taxonomy/request/GetChannelRequestV1';
import '@toofab/schemas/toofab/taxonomy/request/GetChannelResponseV1';
import '@toofab/schemas/toofab/taxonomy/request/SearchCategoriesRequestV1';
import '@toofab/schemas/toofab/taxonomy/request/SearchCategoriesResponseV1';
import '@toofab/schemas/toofab/taxonomy/request/SuggestHashtagsRequestV1';
import '@toofab/schemas/toofab/taxonomy/request/SuggestHashtagsResponseV1';
import '@triniti/schemas/triniti/common/RenderContextV1';
import '@triniti/schemas/triniti/curator/SlotV1';
import '@triniti/schemas/triniti/migrator/command/SyncCfNodesV1';
import '@triniti/schemas/triniti/news/command/SyncFacebookInstantArticleV1';
import '@triniti/schemas/triniti/news/event/FacebookInstantArticleSyncedV1';
import '@triniti/schemas/triniti/notify/NotifierResultV1';
import '@triniti/schemas/triniti/ovp.jwplayer/command/SyncMediaV1';
import '@triniti/schemas/triniti/ovp.jwplayer/event/MediaSyncedV1';
import '@triniti/schemas/triniti/ovp.kaltura/CaptionV1';
import '@triniti/schemas/triniti/ovp.kaltura/EntryV1';
import '@triniti/schemas/triniti/ovp.kaltura/FlavorV1';
import '@triniti/schemas/triniti/ovp.kaltura/command/SyncEntryV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StartChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StopChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStartedV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStoppedV1';
import '@triniti/schemas/triniti/sys/command/PurgeCacheV1';

export default MessageResolver;
