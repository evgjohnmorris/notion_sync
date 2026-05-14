/**
 * Generated Tool: blocksTool_0044
 * Domain: Blocks
 * ID: 0044
 */
exports.blocksTool_0044 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0044:', error);
    throw error;
  }
};
