// @link https://schemas.toofab.com/json-schema/toofab/canvas/block/image-block/1-0-0.json#
import AspectRatio from '@triniti/schemas/triniti/common/enums/AspectRatio';
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/enums/Format';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasImageBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/image-block/ImageBlockV1Mixin';

export default class ImageBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        Fb.create('etag', T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        /*
         * In rendering environments that support HTML the css_class
         * can be appended to the dom elements' class attribute.
         */
        Fb.create('css_class', T.StringType.create())
          .pattern('^[\\w\\s-]+$')
          .build(),
        /*
         * Represents an update that occurred on the node this block
         * is attached to. DOES NOT indicate an update to the block itself.
         * eg an article with a twitter block with updated_date means that
         * the article was updated to include that twitter block.
         */
        Fb.create('updated_date', T.DateTimeType.create())
          .build(),
        /*
         * When true it means this block represents a portion of a document
         * whose content is only indirectly related to the document's main content.
         * Asides are frequently presented as sidebars or call-out boxes.
         */
        Fb.create('aside', T.BooleanType.create())
          .build(),
        Fb.create('node_ref', T.NodeRefType.create())
          .required()
          .build(),
        /*
         * An optional override for the title of the node.
         */
        Fb.create('title', T.StringType.create())
          .build(),
        Fb.create('caption', T.TextType.create())
          .maxLength(5000)
          .build(),
        Fb.create('is_nsfw', T.BooleanType.create())
          .build(),
        Fb.create('url', T.TextType.create())
          .format(Format.URL)
          .build(),
        Fb.create('launch_text', T.StringType.create())
          .build(),
        Fb.create('aspect_ratio', T.StringEnumType.create())
          .classProto(AspectRatio)
          .build(),
        /*
         * For imported image blocks it may be necessary to store the old URL.
         */
        Fb.create('fallback_src_url', T.TextType.create())
          .format(Format.URL)
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = ImageBlockV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:toofab:canvas:block:image-block:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'toofab:canvas:block:image-block';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'toofab:canvas:block:image-block:v1';
M.prototype.MIXINS = M.MIXINS = [
  'triniti:canvas:mixin:block:v1',
  'triniti:canvas:mixin:block',
  'triniti:canvas:mixin:node-ref-block:v1',
  'triniti:canvas:mixin:node-ref-block',
  'triniti:canvas:mixin:image-block:v1',
  'triniti:canvas:mixin:image-block',
];

TrinitiCanvasBlockV1Mixin(M);

TrinitiCanvasImageBlockV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
