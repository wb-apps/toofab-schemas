<?php
// @link https://schemas.toofab.com/json-schema/toofab/taxonomy/request/suggest-hashtags-request/1-0-0.json#
namespace Toofab\Schemas\Taxonomy\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\SuggestHashtagsRequest\SuggestHashtagsRequestV1 as TrinitiTaxonomySuggestHashtagsRequestV1;
use Triniti\Schemas\Taxonomy\Mixin\SuggestHashtagsRequest\SuggestHashtagsRequestV1Mixin as TrinitiTaxonomySuggestHashtagsRequestV1Mixin;

final class SuggestHashtagsRequestV1 extends AbstractMessage implements
    SuggestHashtagsRequest,
    GdbotsPbjxRequestV1,
    TrinitiTaxonomySuggestHashtagsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:toofab:taxonomy:request:suggest-hashtags-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                TrinitiTaxonomySuggestHashtagsRequestV1Mixin::create(),
            ]
        );
    }
}