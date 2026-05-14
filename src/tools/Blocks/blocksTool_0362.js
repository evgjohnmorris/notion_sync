/**
 * Generated Tool: blocksTool_0362
 * Domain: Blocks
 * ID: 0362
 */
exports.blocksTool_0362 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0362:', error);
    throw error;
  }
};
