/**
 * Generated Tool: blocksTool_0429
 * Domain: Blocks
 * ID: 0429
 */
exports.blocksTool_0429 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0429:', error);
    throw error;
  }
};
