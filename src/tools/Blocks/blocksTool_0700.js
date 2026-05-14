/**
 * Generated Tool: blocksTool_0700
 * Domain: Blocks
 * ID: 0700
 */
exports.blocksTool_0700 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0700:', error);
    throw error;
  }
};
