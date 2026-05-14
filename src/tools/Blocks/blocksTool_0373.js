/**
 * Generated Tool: blocksTool_0373
 * Domain: Blocks
 * ID: 0373
 */
exports.blocksTool_0373 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0373:', error);
    throw error;
  }
};
