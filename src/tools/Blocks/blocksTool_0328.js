/**
 * Generated Tool: blocksTool_0328
 * Domain: Blocks
 * ID: 0328
 */
exports.blocksTool_0328 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0328:', error);
    throw error;
  }
};
