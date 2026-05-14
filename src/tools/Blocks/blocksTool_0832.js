/**
 * Generated Tool: blocksTool_0832
 * Domain: Blocks
 * ID: 0832
 */
exports.blocksTool_0832 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0832:', error);
    throw error;
  }
};
