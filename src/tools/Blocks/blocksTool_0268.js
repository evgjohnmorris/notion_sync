/**
 * Generated Tool: blocksTool_0268
 * Domain: Blocks
 * ID: 0268
 */
exports.blocksTool_0268 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0268:', error);
    throw error;
  }
};
