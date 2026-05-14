/**
 * Generated Tool: blocksTool_0406
 * Domain: Blocks
 * ID: 0406
 */
exports.blocksTool_0406 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0406:', error);
    throw error;
  }
};
