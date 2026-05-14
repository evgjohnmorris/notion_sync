/**
 * Generated Tool: blocksTool_0461
 * Domain: Blocks
 * ID: 0461
 */
exports.blocksTool_0461 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0461:', error);
    throw error;
  }
};
