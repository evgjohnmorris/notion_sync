/**
 * Generated Tool: blocksTool_0265
 * Domain: Blocks
 * ID: 0265
 */
exports.blocksTool_0265 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0265:', error);
    throw error;
  }
};
